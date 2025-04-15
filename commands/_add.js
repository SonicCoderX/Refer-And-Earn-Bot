/*CMD
  command: /add
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

// Fetch admin list from panel
let panel = AdminPanel.getPanelValues("PANEL");
let adminList = panel.ADMINS;

// Restrict access to authorized admins only
if (!adminList || !adminList.split(",").map(id => id.trim()).includes(user.telegramid.toString())) {
  Api.sendMessage({
    text: "⚠️ Access Denied\n\nOnly approved administrators can perform this operation.",
    parse_mode: "HTML"
  });
  return;
}

// Handle missing parameters
if (!params) {
  Api.sendMessage({
    text: `<b>Missing Parameters</b>\n\nUsage:\n<code>/add user_id amount</code>\n\nExamples:\n<code>/add 123456789 100</code>\n<code>/add 987654321 -50</code>\n\nUse negative amounts to reduce balance.`,
    parse_mode: "HTML"
  });
  return;
}

// Extract and validate input
let [targetId, value] = params.split(" ");
if (!targetId || !value || isNaN(targetId) || isNaN(value)) {
  Api.sendMessage({
    text: `❌ <b>Invalid Input</b>\n\nMake sure both fields are valid numbers.\n\nExample:\n<code>/add 123456789 50</code>`,
    parse_mode: "HTML"
  });
  return;
}

// Convert to numbers
targetId = parseInt(targetId);
value = parseFloat(value);

// Update balance
let res = Libs.ResourcesLib.anotherUserRes("balance", targetId);
res.add(value);

// Notify admin
Api.sendMessage({
  text: `✅ <b>Transaction Complete</b>\n\n<b>Amount:</b> ${value}\n<b>User ID:</b> <code>${targetId}</code>\n<b>New Balance:</b> ${res.value()}`,
  parse_mode: "HTML"
});

// Notify user
Api.sendMessage({
  chat_id: targetId,
  text: `📢 <b>Account Updated</b>\n\n<b>Change:</b> ${value}\n<b>Current Balance:</b> ${res.value()}`,
  parse_mode: "HTML"
});
