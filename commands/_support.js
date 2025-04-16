/*CMD
  command: /support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *❓ Hello, how can I help you?*
  keyboard: ❌ Cancel
  aliases: 
  group: 
CMD*/

/*––––––[ Ban Check ]––––––*/  
var ban = Bot.getProperty(user.telegramid);  
if (ban === "Ban") {  
  Api.sendMessage({  
    text: "<i>🚫 You're banned.</i>",  
    parse_mode: "html"  
  });  
  return;  
}  

/*––––––[ Maintenance Check ]––––––*/  
var maintenanceStatus = Bot.getProperty("maintenanceStatus");  
if (maintenanceStatus === "On") {  
  Api.sendMessage({  
    text: "<i>🛠️ Bot is under maintenance, please come back later.</i>",  
    parse_mode: "html"  
  });  
  return;  
}  

/*––––––[ Support System ]––––––*/  
var admin = Bot.getProperty("admin");  
var userName = user.first_name;  
var userID = user.telegramid;  
var username = user.username ? "@" + user.username : "No Username";  

// Define inline button  
var button = [  
  [  
    {  
      text: "Reply to " + userName,  
      callback_data: "/reply " + userID  
    }  
  ]  
];  

// Handle text-only messages  
if (message) {  
  Api.sendMessage({  
    chat_id: admin,  
    text: "<b>🆕 New Support Request</b>\n\n" +  
          "🧑 User: " + userName + "\n" +  
          "👉 Username: " + username + "\n" +  
          "🆔 User ID: <code>" + userID + "</code>\n\n" +  
          "<b>📞 Message:</b> <i>" + message + "</i>",  
    parse_mode: "html",  
    reply_markup: { inline_keyboard: button }  
  });  
}  

// Handle photo with or without caption  
else if (request.photo) {  
  var photoID = request.photo[request.photo.length - 1].file_id;  
  var captionText = request.caption ? request.caption : null;  

  if (captionText) {  
    Api.sendPhoto({  
      chat_id: admin,  
      photo: photoID,  
      caption: "<b>🆕 New Support Request</b>\n\n" +  
               "🧑 User: " + userName + "\n" +  
               "👉 Username: " + username + "\n" +  
               "🆔 User ID: <code>" + userID + "</code>\n\n" +  
               "📷 <i>User sent a photo with a message:</i>\n\n" +  
               "<b>📞 Message:</b> <i>" + captionText + "</i>",  
      parse_mode: "html",  
      reply_markup: { inline_keyboard: button }  
    });  
  } else {  
    Api.sendPhoto({  
      chat_id: admin,  
      photo: photoID,  
      caption: "<b>🆕 New Support Request</b>\n\n" +  
               "🧑 User: " + userName + "\n" +  
               "👉 Username: " + username + "\n" +  
               "🆔 User ID: <code>" + userID + "</code>\n\n" +  
               "📷 <i>User sent a photo.</i>",  
      parse_mode: "html",  
      reply_markup: { inline_keyboard: button }  
    });  
  }  
}  

/*––––––[ User Confirmation ]––––––*/  
Api.sendMessage({  
  text: "<b>📞 Your support message has been sent to our team. They will respond shortly.</b>",  
  parse_mode: "html"  
});  

// Store the user's ID for reference  
Bot.setProperty("replyID", userID, "integer");  

// Return to the main menu  
Bot.runCommand("/mainMenu");
