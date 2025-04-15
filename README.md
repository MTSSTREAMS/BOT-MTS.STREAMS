# MTS STREAMS - Bot WhatsApp Automatizado

Este projeto contém um bot automatizado de WhatsApp desenvolvido com [Venom Bot](https://github.com/orkestral/venom) para o serviço MTS STREAMS.

## Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Uma conta no WhatsApp para autenticação (o QR Code será gerado na primeira execução)

## Instruções para Testar Localmente

```bash
npm install
npm start
```

## Deploy no Render.com

1. Crie uma conta gratuita em [Render.com](https://render.com).
2. No painel do Render, clique em **New** e depois em **Web Service**.
3. Conecte seu repositório ao Render.
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Após o deploy, acesse os logs do serviço para visualizar o QR Code. Escaneie com o número do WhatsApp.

## Integração com Site

```html
<a href="https://wa.me/5541988703381?text=Olá%20quero%20ativar%20um%20plano" target="_blank" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">
  💬 Fale com nosso atendente virtual
</a>
```

## Observações

Render pode colocar a aplicação em modo "sleep" no plano gratuito. Use UptimeRobot para manter online.
