# Refer-And-Earn Bot

Welcome to the **Refer-And-Earn Bot** repository, a Telegram bot designed to simplify referral programs and incentivize users through rewards. Built on the [Bots.Business](https://bots.business) platform, it offers robust features and ease of customization.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Commands Overview](#commands-overview)
  - [/balance](#balance-command)
  - [/bonus](#bonus-command)
  - [/invite](#invite-command)
  - [/withdraw](#withdraw-command)
  - [/stats](#stats-command)
- [License](#license)

---

## Features

- **Referral Tracking**: Keep track of referrals and reward users.
- **Customizable Commands**: Modify bot commands to suit your needs.
- **Multi-language Support**: Support for up to 16 languages for user convenience.
- **Dynamic Statistics**: Display real-time statistics for deposits, withdrawals, trades, and more.
- **Secure Withdrawals**: Easy and safe withdrawal process for users.
- **Admin Panel**: Configure settings without touching the code.

---

## Getting Started

Follow these steps to set up your **Refer-And-Earn Bot**:

1. **Create a Bot on Telegram**:
   - Use [@BotFather](https://telegram.me/BotFather) to create a bot and get its token.

2. **Import Repository**:
   - Import this repository to [Bots.Business](https://bots.business).

3. **Configure Settings**:
   - Add the bot token and configure necessary settings in the admin panel.

4. **Launch the Bot**:
   - Start the bot and configure commands using `/setup`.

---

## Commands Overview

### /balance Command

#### Purpose:
Provides users with an overview of their account, including wallet balance, active VIP plans, and investment summary.

#### Features:
- Displays user details such as name, ID, and wallet balance.
- Shows active VIP plans and their respective profits.
- Includes buttons for mining history, deposit history, and withdrawal history.

#### Example Output:
```
🔹 Name: [User's Name]
🔹 User ID: [User's Telegram ID]

💰 Wallet Details:
✅ Available Balance: 25.40 USDT
💸 Total Profit Earned: 10.50 USDT

⚡ Total Active VIP Plans:
🔹 VIP 1: 2 running
🔹 VIP 2: 1 running

💼 Investment Summary:
💲 Total Investment: 150.00 USDT
💵 Daily Profit: 5.00 USDT
```

---

### /bonus Command

#### Purpose:
Allows users to claim periodic bonuses.

#### Features:
- Multi-language support for up to 16 languages.
- Displays when bonuses are ready to be claimed.
- Provides a button to claim the bonus.

#### Example Output:
```
🎁 Your bonus is ready to claim again.
[Claim Now]
```

---

### /invite Command

#### Purpose:
Promotes the referral program and displays referral stats.

#### Features:
- Displays the referral link and stats.
- Provides buttons for referral history and withdrawing referral commissions.

#### Example Output:
```
🔥 Exclusive Referral Commission System! 🔥

💰 Earn 10% on every deposit made by your referrals! The more you refer, the more you earn! 🚀

🏆 Referral Stats:
🔹 Total Referrals: 10
🔹 Total Deposits: 100 USDT
🔹 Total Earnings: 10 USDT

👬 Your Invite Link:
🔗 https://t.me/YourBot?start=ref123

📢 How to Start?
1. Share your link on social platforms.
2. Earn 10% commissions on referrals’ deposits.
3. Withdraw anytime!
```

---

### /withdraw Command

#### Purpose:
Allows users to withdraw their earnings securely.

#### Features:
- Validates wallet address and withdrawal amount.
- Checks against withdrawal limits and balances.
- Provides a confirmation step with details of the withdrawal request.

#### Example Output:
```
⁉️ Withdrawal Confirmation

Requested Amount: 50.00 USDT
Withdrawal Fee: 0.00 USDT
Amount to Receive: 50.00 USDT
Wallet: 0x1234567890abcdef...

✅ Confirm    ❌ Cancel
```

---

### /stats Command

#### Purpose:
Displays real-time statistics about the bot and its users.

#### Features:
- Shows active users, total deposits, and withdrawals.
- Displays trading performance with live trade stats.
- Includes buttons to view live trades and return to the main menu.

#### Example Output:
```
🤖 Bot Status:
✅ Paying | ✅ Auto Withdrawals

📊 Users & Investments:
👥 Active Users: 750
📥 Total Deposits: 7,500,000 USDT
📤 Total Withdrawn: 3,500,000 USDT

📈 Trading Performance:
🔄 Live Trades: 1,300
🎯 Accuracy: 95%
💹 Profitable: 1,250
📉 Losses: 50

💰 24H Profit: 120,000 USDT
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy bot building! 🚀
