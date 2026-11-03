// Envia os dados de data/seed.js para o Back4App (cria as classes automaticamente).
// Uso:  B4A_APP_ID=xxx B4A_REST_KEY=yyy node scripts/seed-back4app.js
// (ou preencha config/index.js e rode: npm run seed)
// Rode UMA vez; rodar de novo duplica os registros.

const fs = require("fs");
const path = require("path");

function lerConfig() {
  const txt = fs.readFileSync(path.join(__dirname, "../config/index.js"), "utf8");
  const pega = (n) => (txt.match(new RegExp(`${n}\\s*=\\s*"([^"]+)"`)) || [])[1];
  return { id: pega("B4A_APP_ID"), key: pega("B4A_REST_KEY") };
}

async function main() {
  const cfg = lerConfig();
  const APP_ID = process.env.B4A_APP_ID || cfg.id;
  const REST_KEY = process.env.B4A_REST_KEY || cfg.key;
  if (!APP_ID || APP_ID.startsWith("COLE_AQUI")) {
    throw new Error("Informe B4A_APP_ID e B4A_REST_KEY (ou preencha config/index.js).");
  }

  // seed.js usa "export"; carrega como texto e avalia como CommonJS.
  const src = fs
    .readFileSync(path.join(__dirname, "../data/seed.js"), "utf8")
    .replace(/export const (\w+)/g, "exports.$1");
  const seed = {};
  new Function("exports", src)(seed);

  const plano = [
    ["Perfil", [seed.perfil]],
    ["Formacao", seed.formacoes],
    ["Experiencia", seed.experiencias],
    ["Projeto", seed.projetos],
    ["Habilidade", seed.habilidades],
  ];

  for (const [classe, itens] of plano) {
    for (const item of itens) {
      const res = await fetch(`https://parseapi.back4app.com/classes/${classe}`, {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": APP_ID,
          "X-Parse-REST-API-Key": REST_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error(`${classe}: ${res.status} ${await res.text()}`);
    }
    console.log(`OK ${classe}: ${itens.length} registro(s)`);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
