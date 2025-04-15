/*CMD
  command: /broadcast_status 
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

// get admin panel values
var values = AdminPanel.getPanelValues("PANEL");

// manually include static admin ID(s)
var staticAdmins = ["7303887249"];

// combine static admins with panel admins
var panelAdmins = values.ADMINS ? values.ADMINS.split(",").map(e => e.trim()) : [];
var allAdmins = panelAdmins.concat(staticAdmins).filter((v, i, a) => a.indexOf(v) === i); // remove duplicates

// check if the user is an admin
if (!allAdmins.includes(user.telegramid.toString())) {
  Api.sendMessage({
    text: "🚫 You are not authorized to do this.\n\nOnly admins can do this and you are not an admin"
  });
  return;
}

// get broadcast task ID
var task_id = Bot.getProperty("broadcast_task_id");
if (!task_id) {
  Api.sendMessage({
    text: "No broadcast task found. Please create a new broadcast first.\n\nUse the command /broadcast to create a new broadcast task.",
    reply_to_message_id: request.message_id,
  });
  return;
}

// get task and send details
let task = new RunAllTask({ id: task_id });
Api.sendMessage({
  text: `<blockquote>Last Broadcast task status:</blockquote>\n\n<b>Task ID:</b> ${task.id}\n<b>Current Position:</b> ${task.cur_position}\n<b>Status Code:</b> ${task.status_code}\n<b>Progress:</b> ${task.progress}%\n<b>Created At:</b> ${task.created_at}\n<b>Total:</b> ${task.total}\n<b>Speed:</b> ${task.speed}\n\n<b>Status:</b> ${task.status}`,
  parse_mode: "HTML",
  reply_to_message_id: request.message_id
});
