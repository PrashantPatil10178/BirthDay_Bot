const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

async function whatsapp(text) {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client is Ready");
    client.getChats().then((chats) => {
      const myGroup = chats.find(
        (chat) => chat.name === "SY IT 2022-23(Unofficial)"
      );
      client.sendMessage(myGroup.id._serialized, text);
    });
  });

  client.initialize();
}

module.exports = whatsapp;
