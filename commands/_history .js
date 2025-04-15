/*CMD
  command: /history 
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

/*CMD
  command: /history
  help: Show withdraw history
  need_reply: false
  auto_retry_time:
  folder: Withdraw
CMD*/

let allProps = Bot.getProperties();
let userId = user.telegramid;

let history = [];

for (let key in allProps) {
  if (allProps.hasOwnProperty(key)) {
    let data = allProps[key];
    if (typeof data === "string" && data.includes(userId)) {
      history.push({ key: key, data: data });
    }
  }
}

if (history.length === 0) {
  Bot.sendMessage("📜 You don't have any withdrawal history yet.");
  return;
}

// Sort by key (assuming key is timestamp-based ID)
history.sort((a, b) => b.key - a.key);

let msg = "<b>📜 Your Withdrawal History:</b>\n\n";

let count = 0;
for (let entry of history) {
  if (count >= 10) break;
  let parts = entry.data.split("\n");
  let amountLine = parts.find(p => p.includes("💸 Amount:"));
  let timeLine = parts.find(p => p.includes("🩷 Time:"));
  
  msg += `🆔 <code>${entry.key}</code>\n${amountLine}\n${timeLine}\n\n`;
  count++;
}

Api.sendMessage(msg, { parse_mode: "HTML" });
