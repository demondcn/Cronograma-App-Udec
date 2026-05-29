const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function splitSqlStatements(sql) {
  const statements = [];
  let current = "";
  let inSingleQuote = false;

  for (let index = 0; index < sql.length; index += 1) {
    const char = sql[index];
    const nextChar = sql[index + 1];

    if (char === "-" && nextChar === "-" && !inSingleQuote) {
      while (index < sql.length && sql[index] !== "\n") {
        index += 1;
      }
      continue;
    }

    if (char === "'") {
      current += char;

      if (inSingleQuote && nextChar === "'") {
        current += nextChar;
        index += 1;
        continue;
      }

      inSingleQuote = !inSingleQuote;
      continue;
    }

    if (char === ";" && !inSingleQuote) {
      const statement = current.trim();

      if (statement) {
        statements.push(statement);
      }

      current = "";
      continue;
    }

    current += char;
  }

  const lastStatement = current.trim();

  if (lastStatement) {
    statements.push(lastStatement);
  }

  return statements.filter(
    (statement) => !["BEGIN", "COMMIT"].includes(statement.toUpperCase())
  );
}

async function main() {
  const sqlPath = path.join(
    __dirname,
    "insert_elementos_deportivos_reales.sql"
  );
  const sql = fs.readFileSync(sqlPath, "utf8");
  const statements = splitSqlStatements(sql);

  await prisma.$transaction(async (tx) => {
    for (const statement of statements) {
      await tx.$executeRawUnsafe(statement);
    }
  });
}

main()
  .then(async () => {
    console.log("Inventario deportivo real importado correctamente.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error importando inventario deportivo real:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
