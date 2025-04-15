const { create } = require('venom-bot');

create()
  .then((client) => start(client))
  .catch((erro) => {
    console.error('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  console.log('MTS STREAMS Bot iniciado com sucesso!');
  
  client.onMessage(async (message) => {
    if (message.body === '1') {
      await client.sendText(
        message.from,
        `📺 *Planos MTS STREAMS*\n\n` +
        `*Plano Mensal*: R$24,99\n` +
        `*Plano Trimestral*: R$59,99\n` +
        `*Plano Semestral*: R$109,99\n` +
        `*Plano Anual*: R$199,99\n\n` +
        `*+1 Dispositivo (Opcional)*: R$14,99\n\n` +
        `Para ativar, clique aqui: https://wa.me/5541988703381?text=Olá,%20quero%20ativar%20um%20plano!`
      );
    } else if (message.body === '2') {
      await client.sendText(
        message.from,
        `✅ *Suporte MTS STREAMS*\n\n` +
        `Olá! Por favor, descreva seu problema ou dúvida para que possamos te ajudar.`
      );
    } else {
      await client.sendText(
        message.from,
        `👋 Olá! Bem-vindo à *MTS STREAMS*.\n\n` +
        `Digite:\n` +
        `1️⃣ para ver os planos disponíveis\n` +
        `2️⃣ para suporte técnico\n\n` +
        `Ou aguarde que um atendente falará com você.`
      );
    }
  });
}
