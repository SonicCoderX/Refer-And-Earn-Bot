/*CMD
  command: /setup
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

var settingsPanel = {
  title: "Custom Bot Configuration",
  description: "Customize all bot settings below and personalize your bot’s behavior.",
  index: 0,
  icon: "settings",
  button_title: "APPLY CHANGES",
  fields: [
    {
      name: "ANNOUNCEMENT_CHANNEL",
      title: "📢 Announcement Channel",
      description: "Enter the channel ID where your announcements will be posted.",
      type: "string",
      placeholder: "@channelusername or -100123456789"
    },
    {
      name: "WITHDRAW_NOTIFICATION_CHANNEL",
      title: "🏦 Withdraw Notification Channel",
      description: "Enter the channel ID for withdrawal notifications.",
      type: "string",
      placeholder: "@channelusername or -100123456789"
    },
    {
      name: "CURRENCY",
      title: "💱 Currency",
      description: "Specify the currency used for transactions (e.g., BBP, USD).",
      type: "string",
      placeholder: "e.g., BBP, USD"
    },
    {
      name: "BONUS_REWARD",
      title: "🎁 Bonus Reward",
      description: "Set the bonus reward amount for users.",
      type: "float",
      placeholder: "e.g., 5.00"
    },
    {
      name: "BONUS_INTERVAL",
      title: "⏰ Bonus Interval (in hours)",
      description: "Set the time interval (in hours) for claiming bonuses.",
      type: "integer",
      placeholder: "e.g., 24"
    },
    {
      name: "REFER_REWARD",
      title: "👥 Referral Reward",
      description: "Specify the reward amount for every referral.",
      type: "float",
      placeholder: "e.g., 1.00"
    },
    {
      name: "ADMINS",
      title: "🩵 Bot Admin",
      description: "Enter the Telegram IDs of admins (comma-separated).",
      type: "string",
      placeholder: "e.g., 12345678, 98765432"
    },
    {
      name: "MINIMUM_WITHDRAW",
      title: "💸 Minimum Withdraw",
      description: "Set the minimum amount allowed for withdrawals.",
      type: "float",
      placeholder: "e.g., 10.00"
    },
    {
      name: "MAXIMUM_WITHDRAW",
      title: "💸 Maximum Withdraw Amount",
      description: "Set the maximum amount allowed for withdrawals.",
      type: "float",
      placeholder: "e.g., 1000.00"
    },
    {
      name: "REFER_PREFIX",
      title: "🌟 Referral Link Prefix",
      description: "Specify the prefix to be used in referral links.",
      type: "string",
      placeholder: "e.g., user"
    },
    {
      name: "BOT_IMAGE_URL",
      title: "Bot Image URL",
      description: "Set the image URL for referral previews.",
      type: "string",
      placeholder: "e.g., https://telegra.ph/file/image.jpg"
    }
  ]
};

var botCommands = [
  { command: "/start", description: "Start the bot" },
  { command: "/withdraw", description: "Withdraw your balance" },
  { command: "/bonus", description: "Claim bonus" },
  { command: "/referral", description: "Referral Link" },
  { command: "/myreferrals", description: "View your referrals" },
  { command: "/toplist", description: "Top inviters list" },
  { command: "/balance", description: "Check your balance" },
  { command: "/setwallet", description: "Set wallet" },
  { command: "/add", description: "Transfer balance (admin only)" },
  { command: "/broadcast", description: "Broadcast a message (admin only)" },
  { command: "/status", description: "Check Bot status (admin only)" }
];

Api.setMyCommands({ commands: botCommands });

AdminPanel.setPanel({
  panel_name: "PANEL",
  data: settingsPanel,
  force: true
});

// Membership checker and extra messages have been removed for uniqueness.
Bot.sendMessage("Configuration applied successfully!");
Bot.sendMessage("Commands set successfully!");
