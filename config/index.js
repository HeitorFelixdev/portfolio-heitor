// Chaves do Back4App (Settings > App Settings > Security & Keys).
// Cole aqui o "Application ID" e a "REST API Key" do seu app.
// Enquanto estiverem com o texto COLE_AQUI, o app usa os dados locais (data/seed.js).
export const B4A_APP_ID = "6YXlUUwDxuTXynvMVFtbQHgNvEJKIh7kCiZcCXJV";
export const B4A_REST_KEY = "2vxHnc7D18RlLrG0J4f4ebeLsW6q6XlNbJ7h80Ff";

export const B4A_CONFIGURADO =
  !B4A_APP_ID.startsWith("COLE_AQUI") && !B4A_REST_KEY.startsWith("COLE_AQUI");

export const theme = {
  bg: "#0B1020",
  surface: "#141B2F",
  surfaceHi: "#1C2540",
  border: "#26314F",
  text: "#EAF0FF",
  textDim: "#9AA7C7",
  primary: "#5EEAD4",
  primaryDim: "#134E4A",
  accent: "#818CF8",
};
