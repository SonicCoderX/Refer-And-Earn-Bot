# Refer & Earn Telegram Bot

A powerful Refer & Earn Telegram Bot built for the Bots.Business REB Contest.  
Includes a robust referral system, balance tracking, withdrawal flow, multi-language support, leaderboard, and a feature-rich admin panel.

**Repository:** [SonicCoderX/Refer-And-Earn-Bot](https://github.com/SonicCoderX/Refer-And-Earn-Bot)

---

## 🚀 Features

- **Referral System**: Earn rewards by inviting friends.
- **Balance Tracking**: Real-time user balances and earnings.
- **Withdrawal System**: Secure, admin-configurable withdrawal flow.
- **Leaderboard**: See top performers by referrals and earnings.
- **Multi-Language Support**: English, Italian, Spanish, Portuguese, German, French, Russian.
- **Admin Panel**: Manage balances, set withdrawal limits, broadcast messages, and more.
- **Anti-Abuse**: Ban system and checks to prevent self-invites or multiple rewards.

---

## 🗂️ Folder Structure

- `commands/` — All user and admin command handlers.
- `commands/Admin Panel/` — Admin-only bot controls.
- `commands/_start.js` — Main entry point for new and returning users.
- `commands/_help.js` — Help and info.
- `commands/_balance.js` — Balance and earnings summary.
- `commands/_withdraw.js` — Withdrawal logic and checks.
- `commands/_leaderboard.js` — Leaderboard display.
- Other files for advanced flow and state management.

---

## ⚙️ Bot User Flow

1. **Start**  
   User sends `/start` (handles referral tracking if joined via invite link).
   - New users are logged and notified to admin.
   - Referral attributions are handled, and both user and referrer are notified.

2. **Main Menu**  
   After `/start`, users can:
   - Check `/balance` for wallet and plan stats.
   - View `/leaderboard` for top earners/referrers.
   - Use `/withdraw_funds` to begin a withdrawal.
   - Access `/help` for detailed info.

3. **Referral & Earnings**  
   - Each user has a unique referral link.
   - On successful referrals, both parties may be rewarded (per admin-configured logic).

4. **Withdrawals**  
   - Start with `/withdraw_funds`.
   - Enter amount (within min/max admin limits).
   - Funds deducted and withdrawal request logged for processing.
   - Withdrawal can only proceed if wallet is set, not banned, and not under maintenance.

5. **Admin Controls** (`Admin Panel/`)
   - `/addBalance` — Add funds to any user by Telegram ID.
   - `/removeBalance` — Remove funds from any user.
   - `/setMinimumWithdraw` — Set the minimum withdrawal threshold.
   - `/setMaximumWithdraw` — Set the maximum withdrawal threshold.
   - All admin actions are permission checked.

---

## 📝 Commands

| Command                  | Description                                         | Accessible by |
|--------------------------|-----------------------------------------------------|---------------|
| `/start`                 | Start bot, handle referral, show main menu          | User          |
| `/help`                  | Show help and project info                          | User          |
| `/balance`               | View your balance and earnings breakdown            | User          |
| `/leaderboard`           | See top referrers and earners                       | User          |
| `/withdraw_funds`        | Begin withdrawal flow                               | User          |
| `/withdraw`              | (Follow-up) Submit withdrawal amount                | User          |
| `/addBalance`            | Add balance to a user (by ID)                       | Admin         |
| `/removeBalance`         | Remove balance from a user (by ID)                  | Admin         |
| `/setMinimumWithdraw`    | Set minimum withdrawal limit                        | Admin         |
| `/setMaximumWithdraw`    | Set maximum withdrawal limit                        | Admin         |

> Tip: The bot has multi-language prompts for user-facing commands.

---

## 🌐 Multi-Language Support

All major commands and user flows support these languages:
- English (EN)
- Italian (IT)
- Spanish (ES)
- Portuguese (PT)
- German (DE)
- French (FR)
- Russian (RU)

---

## 🛡️ Security & Anti-Abuse

- Users are banned if flagged by admin or bot logic.
- Maintenance mode blocks non-admin actions.
- Self-invites and duplicate referrals prevented.
- Withdrawals require valid USDT (BEP20) wallet.

---

## 🛠️ Setup & Deployment

1. **Clone this repository**
   ```bash
   git clone https://github.com/SonicCoderX/Refer-And-Earn-Bot.git
   ```

2. **Configure Bot on [Bots.Business](https://bots.business/)**  
   - Import the JavaScript command files into your bot project.
   - Set necessary bot properties: `admin`, withdrawal limits, etc.

3. **Set Bot Properties**
   - `admin` (Telegram ID of bot admin)
   - `minimumWithdraw` (e.g., `1`)
   - `maximumWithdraw` (e.g., `1000`)
   - `maintenanceStatus` (On/Off)
   - `Broadcast` (array of user IDs for broadcasting)
   - Any other custom properties for your flow.

4. **Launch and Test**
   - Start your bot.
   - Test referral, withdrawal, and admin flows.

---

## 🏆 Example Screens

- **Help Command**  
  ![Help](https://i.ibb.co/BNSHtmr/IMG-2476.jpg)

---

## 💡 Notes

- This bot is designed for Bots.Business platform (not a standalone Node.js/JS app).
- All logic is in JavaScript files tailored for Bots.Business scripting.
- To see or customize all commands, check the [`commands/`](./commands) folder.

---

## 📚 More

- [Full source code and commands](https://github.com/SonicCoderX/Refer-And-Earn-Bot)
- For more details, browse the repository on GitHub to explore all command files and logic.

---

## 👨‍💻 Credits

- Developed by [SonicCoderX](https://github.com/SonicCoderX)
- For contest, demo, and educational use.

---

> **Note:** This README is based on an automated analysis of up to 10 command files.  
> For a complete list, browse the [GitHub code search results](https://github.com/SonicCoderX/Refer-And-Earn-Bot/search?q=command) or the [`commands/`](https://github.com/SonicCoderX/Refer-And-Earn-Bot/tree/main/commands) directory for all available features and flows.
> 
