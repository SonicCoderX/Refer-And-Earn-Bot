/*CMD
  command: /broadcast_task
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

if (!options) {return}

var task = options?.run_all_task;
if (!task) {return}

Bot.setProp("broadcast_task_id", task.id);

Api.sendMessage({
    text: `Broadcast task created successfully!\n\n<b>Task ID:</b> ${task.id}\n<b>Current Position:</b> ${task.cur_position}\n<b>Status Code:</b> ${task.status_code}\n\n<blockquote>You can check the status of the task using the command /status</>`,
    parse_mode: "HTML"
});
