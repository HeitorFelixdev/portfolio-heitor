# Portfólio Heitor (React Native + Expo + Back4App)

App de currículo/portfólio em tema escuro. Abas: Início, Acadêmica, Profissional, Projetos, Sobre.
Funcionalidade extra: botões de contato (WhatsApp, e-mail, LinkedIn) na tela Início.

## Rodar
    npm install
    npx expo start --go

## Back4App
1. Criar o app em back4app.com (New App > Backend as a Service).
2. App Settings > Security & Keys: copiar Application ID e REST API Key para `config/index.js`.
3. `npm run seed` (uma vez) cria as classes Perfil, Formacao, Experiencia, Projeto e Habilidade com os dados do currículo.
4. Editar os dados pelo painel do Back4App aparece no app (puxe a tela para atualizar).

## Publicar no Expo (owner = organização do professor)
1. Em `app.json`, trocar `owner` pelo nome da organização.
2. `npm i -g eas-cli`, `eas login`, `eas init`, `eas update:configure`
3. `eas update --branch main --message "v1"` (o QR Code do Expo Go aparece em expo.dev > projeto > Updates).
