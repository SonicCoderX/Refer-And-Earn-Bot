/*CMD
  command: /help
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

var panelData = AdminPanel.getPanelValues("PANEL");

// Custom help message (editable from PANEL if desired)
var helpText = panelData.SUPPORT_MESSAGE || `ℹ️ *Welcome to Your Earning Assistant!*  

💼 *Earn by Sharing!*  
Invite others and earn TRX rewards instantly.

🔍 *How to Use:*  
1️⃣ *Launch the bot* and follow the setup.  
2️⃣ *Join the required channels.*  
3️⃣ *Share your unique referral link.*  
4️⃣ *Earn and withdraw TRX anytime.*`;

var inlineBtns = {
  inline_keyboard: [
    [{ text: "✍️ Contact Support", callback_data: "/support" }],
    [{ text: "▷ Back", callback_data: "/start" }]
  ]
};

// Edit existing message if possible
if (request.message?.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: helpText,
    parse_mode: "Markdown",
    reply_markup: inlineBtns
  });
} else {
  Api.sendMessage({
    text: helpText,
    parse_mode: "Markdown",
    reply_markup: inlineBtns
  });
}
