import { NextResponse } from "next/server";

const CONTACTS = ["573054233742", "573103326751", "573218108433"];
const WHATSAPP_TEMPLATE_NAME =
  process.env.WHATSAPP_TEMPLATE_NAME || "nueva_solicitud_deportiva";
const WHATSAPP_TEMPLATE_LANGUAGE = process.env.WHATSAPP_TEMPLATE_LANGUAGE || "es";

interface WhatsAppRequestItem {
  name?: string;
  detail?: string;
  quantity?: number;
}

interface WhatsAppRequestPayload {
  applicantName?: string;
  documentNumber?: string;
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

        return `${quantity} x ${name}${detail}`;
      })
      .join(", ") || "Sin elementos"
  );
}

function buildTemplate(request: WhatsAppRequestPayload, itemsText: string) {
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
    const endpoint = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

    console.log("WhatsApp template config:", {
      templateName: WHATSAPP_TEMPLATE_NAME,
      templateLanguage: WHATSAPP_TEMPLATE_LANGUAGE,
      phoneNumberId,
    });

    console.log("WhatsApp send request:", {
      contacts: CONTACTS,
      phoneNumberId,
      templateName: WHATSAPP_TEMPLATE_NAME,
      templateLanguage: WHATSAPP_TEMPLATE_LANGUAGE,
      applicantName: requestData.applicantName,
      documentNumber: requestData.documentNumber,
      selectedItemsCount: requestData.selectedItems?.length,
    });

    const results = await Promise.all(
      CONTACTS.map(async (phone) => {
        try {
          const payload = {
            messaging_product: "whatsapp",
            to: phone,
            type: "template",
            template: buildTemplate(requestData, itemsText),
          };

          console.log("WhatsApp payload:", JSON.stringify(payload, null, 2));

          const metaResponse = await fetch(endpoint, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          const data = await metaResponse.json();
          const result = {
            phone,
            ok: metaResponse.ok,
            status: metaResponse.status,
            data,
          };

          if (metaResponse.ok) {
            console.log("WhatsApp Meta response success:", {
              phone,
              ok: metaResponse.ok,
              status: metaResponse.status,
              data,
            });
          } else {
            console.error("WhatsApp Meta response error:", {
              phone,
              ok: metaResponse.ok,
              status: metaResponse.status,
              data,
            });
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
        ...(failed.length > 0
          ? { message: "Falló el envío de WhatsApp" }
          : {}),
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
