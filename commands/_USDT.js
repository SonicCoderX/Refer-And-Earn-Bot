/*CMD
  command: /USDT
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

// CryptoCompare API से डेटा लाना
HTTP.get({
    url: "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD",
    success: "/handleCryptoCompare",
    error: "/handleCryptoCompareError"
});

// सफल API कॉल का हैंडलर
Bot.runCommand("/handleCryptoCompare");

// Error हैंडलर
Bot.runCommand("/handleCryptoCompareError");
