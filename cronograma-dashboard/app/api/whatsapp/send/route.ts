import { NextResponse } from "next/server";

const CONTACTS = ["573054233742", "573103326751", "573218108433"];
const WHATSAPP_TEMPLATE_NAME =
  process.env.WHATSAPP_TEMPLATE_NAME || "hello_world";
const WHATSAPP_TEMPLATE_LANGUAGE =
  process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en_US";

interface WhatsAppRequestItem {
  name?: string;
  detail?: string;
  quantity?: number;
}

interface WhatsAppRequestPayload {
  applicantName?: string;
  documentNumber?: string;
  responsibleTeacher?: string;
  selectedItems?: WhatsAppRequestItem[];
  requestDate?: string;
  requestDay?: string;
  status?: string;
}

function buildItemsText(request: WhatsAppRequestPayload) {
  return (
    request.selectedItems
      ?.map((item) => {
        const quantity = item.quantity || 1;
        const name = item.name || "Elemento deportivo";
        const detail = item.detail ? ` (${item.detail})` : "";

        return `- ${quantity} x ${name}${detail}`;
      })
      .join("\n") || "Sin elementos"
  );
}

function buildTemplate(request: WhatsAppRequestPayload, itemsText: string) {
  const isTestTemplate = WHATSAPP_TEMPLATE_NAME === "hello_world";

  if (isTestTemplate) {
    return {
      name: WHATSAPP_TEMPLATE_NAME,
      language: {
        code: WHATSAPP_TEMPLATE_LANGUAGE,
      },
    };
  }

  return {
    name: WHATSAPP_TEMPLATE_NAME,
    language: {
      code: WHATSAPP_TEMPLATE_LANGUAGE,
    },
    components: [
      {
        type: "body",
        parameters: [
          {
            type: "text",
            text: request.applicantName || "Sin nombre registrado",
          },
          {
            type: "text",
            text: request.documentNumber || "Sin documento",
          },
          {
            type: "text",
            text: itemsText || "Sin elementos",
          },
          {
            type: "text",
            text: request.status || "RECEPCIONADA",
          },
        ],
      },
    ],
  };
}

export async function POST(req: Request) {
  try {
    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!token || !phoneNumberId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Faltan variables WHATSAPP_TOKEN o WHATSAPP_PHONE_NUMBER_ID",
        },
        { status: 500 }
      );
    }

    const requestData = (await req.json()) as WhatsAppRequestPayload;
    const itemsText = buildItemsText(requestData);
    const template = buildTemplate(requestData, itemsText);
    const mode =
      WHATSAPP_TEMPLATE_NAME === "hello_world" ? "test" : "production";
    const endpoint = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

    console.log("WhatsApp send request:", {
      mode,
      contacts: CONTACTS,
      phoneNumberId,
      templateName: WHATSAPP_TEMPLATE_NAME,
      templateLanguage: WHATSAPP_TEMPLATE_LANGUAGE,
      applicantName: requestData.applicantName,
      documentNumber: requestData.documentNumber,
      responsibleTeacher: requestData.responsibleTeacher,
      selectedItemsCount: requestData.selectedItems?.length || 0,
    });

    const results = await Promise.all(
      CONTACTS.map(async (phone) => {
        try {
          const metaResponse = await fetch(endpoint, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: phone,
              type: "template",
              template,
            }),
          });

          const data = await metaResponse.json();
          const result = {
            phone,
            ok: metaResponse.ok,
            status: metaResponse.status,
            data,
          };

          if (metaResponse.ok) {
            console.log("WhatsApp Meta response:", result);
          } else {
            console.error("WhatsApp Meta response error:", result);
          }

          return result;
        } catch (error) {
          const result = {
            phone,
            ok: false,
            status: 500,
            error:
              error instanceof Error ? error.message : "Error desconocido",
          };

          console.error("WhatsApp send error:", result);

          return result;
        }
      })
    );

    const failed = results.filter((result) => !result.ok);

    return NextResponse.json(
      {
        ok: failed.length === 0,
        results,
      },
      {
        status: failed.length === 0 ? 200 : 500,
      }
    );
  } catch (error) {
    console.error("Error sending WhatsApp notifications:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
