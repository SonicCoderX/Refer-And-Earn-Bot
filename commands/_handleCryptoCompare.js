/*CMD
  command: /handleCryptoCompare
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

// /handleCryptoCompare Command
if (request.success) {
    let response = JSON.parse(request.body);
    let cryptos = response.Data;

    let message = "<b>🚀 लाइव क्रिप्टो मार्केट अपडेट</b>\n\n";

    for (let i = 0; i < cryptos.length; i++) {
        let coin = cryptos[i].CoinInfo;
        let priceData = cryptos[i].RAW.USD;

        message += `💰 <b>${coin.FullName} (${coin.Name})</b>\n`;
        message += `💵 Price: $${priceData.PRICE.toFixed(2)}\n`;
        message += `📈 Market Cap: $${(priceData.MKTCAP / 1e9).toFixed(2)}B\n`;
        message += `🔄 24h Change: ${priceData.CHANGEPCT24HOUR.toFixed(2)}%\n\n`;
    }

    let buttons = [
        [{ text: "🔄 Refresh", command: "/handleCryptoCompare" }]
    ];

    Bot.sendInlineKeyboard(buttons, message, { parse_mode: "HTML" });
} else {
    Bot.sendMessage("❌ CryptoCompare API से डेटा लाने में समस्या हो रही है।");
}
