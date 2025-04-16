/*CMD
  command: /trx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *💸 Send the amount of TRX you want to deposit note: Deposit More Than 500$ can contact @onlinebot_Support To Avoid Fees.*
  keyboard: ❌ Cancel
  aliases: 
  group: 
CMD*/

if (request.message) {
  var chatID = request.message.chat_id;
  var messageID = request.message.message_id;

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  });
}

var ban = Bot.getProperty(user.telegramid);

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>";

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  });
  return;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var amount = message;

if (!isNumeric(amount)) {
  var notNumberText = "<i>⚠️ Send only numerical value.</i>";

  Api.sendMessage({
    text: notNumberText,
    parse_mode: "html"
  });

  Bot.runCommand("/trx");
  return;
}

if (amount < 10) {
  var lessText = "<i>⚠️ Minimum deposit :</i> <code>10 USDT</code>";

  Api.sendMessage({
    text: lessText,
    parse_mode: "html"
  });

  Bot.runCommand("/trx");
  return;
}

User.setProperty("amountUSDT", amount, "string");

var id = Libs.Random.randomInt(1000, 99999999);
var orderID = "CWM" + id;
var currency = "USDT";
var lifeTime = 15;
let options = {
  url: "merchants/request/whitelabel",
  fields: {
    amount: amount,
    currency: currency,
    payCurrency: currency,
    lifeTime: lifeTime,
    orderId: orderID,
    onCallback: "/trx2"
  },
  onSuccess: "/trx3"
};

Libs.OxaPayLib.apiCall(options);
