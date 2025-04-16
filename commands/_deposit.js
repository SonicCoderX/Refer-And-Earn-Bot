/*CMD
  command: /deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  text: "<b>💸 Deposit Now & Choose Your Currency 👇</b>",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ text: "USDT (BEP20)", callback_data: "depositUSDT" }],
      [{ text: "💳 Import Wallet", callback_data: "/importwallet" }]
    ]
  }
});
