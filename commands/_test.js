/*CMD
  command: /test
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

if (!options) {
  Libs.OxaPayLib.apiCall({
    url: "api/currencies",
    onSuccess: "/test"
  });
  return;
}

// Convert JSON response to an object
let currencies = options.data;
let keys = Object.keys(currencies);
//let page = params[1] ? parseInt(params[1]) : 1;
let page = 1;
let perPage = 15; // Number of currencies per page
let totalPages = Math.ceil(keys.length / perPage);

// Ensure the page number is within limits
if (page < 1) page = 1;
if (page > totalPages) page = totalPages;

// Extract the portion for the current page
let start = (page - 1) * perPage;
let end = start + perPage;
let pageData = keys.slice(start, end).map(key => {
  let curr = currencies[key];
  return `💰 *${curr.name}* (${curr.symbol})\n✅ Status: ${curr.status ? "Active" : "Inactive"}\n`;
}).join("\n");

// Create navigation buttons
let buttons = [];
if (page > 1) buttons.push({ text: "⬅️ Previous", callback_data: `/test ${page - 1}` });
if (page < totalPages) buttons.push({ text: "Next ➡️", callback_data: `/test ${page + 1}` });

/*Bot.sendMessage(`📄 *Supported Currencies (Page ${page}/${totalPages})*\n\n${pageData}`, {
  reply_markup: { inline_keyboard: [buttons] }
});*/

Api.sendMessage({
  text: `📄 *Supported Currencies (Page ${page}/${totalPages})*\n\n${pageData}`,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      buttons
    ]
  }
});
