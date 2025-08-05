📄 **Auto-Delete Old Emails from Specific Sender (Gmail + Google Apps Script)**

🧹 Auto Delete Old Emails from Specific Sender in Gmail
Free. Private. No 3rd-party service required.

❓ Why Use This?
Gmail does not allow you to automatically delete emails from a specific sender after a number of days.
If you want that feature, you’d normally need to:

❌ Pay for third-party apps

❌ Give access to your private Gmail account

❌ Trust unknown services with your data

✅ This project gives you full control — for free — using Google Apps Script (from Google itself).
🧠 What This Script Does
This script automatically:

Checks your Gmail inbox for emails from a specific sender (e.g., OTP or bank emails)

Deletes emails that are older than a certain number of days (default: 1 day)

Moves them to Trash (you still have 30 days to recover them)

🛠️ What You Need
A Gmail account

A web browser

5 minutes to follow the instructions below

📋 Step-by-Step Instructions


✅ Step 1: Open Google Apps Script
Visit: https://script.google.com

Click “New Project”

✅ Step 2: Copy & Paste the Code

✅ Step 3: Customize (Optional)

Change sender’s email:

var sender = "someone@example.com";

Change how old the emails should be before deleting:

var daysOld = 3;

✅ Step 4: Run the Script
Click the ▶ Run button (top)

Grant permission when prompted

✅ Step 5: Set it to Run Daily (Optional)

Click the ⏰ Triggers icon (left panel)

Click “+ Add Trigger”

Set:

Function: deleteOldEmailsFromSender

Event Source: Time-driven

Type: Day timer (choose time of day)

🔐 Privacy and Safety
Your emails stay within your Google account

You are not giving access to third-party apps

You can stop or modify the script at any time

🧽 Use Cases
Automatically delete old OTP emails

Clean up bank alerts, system notifications, or newsletters

Keep your inbox clean without doing it manually

📂 Files in This Project
perl
Copy
Edit
📁 auto-delete-old-emails
├── README.md              # This guide
└── deleteOldEmails.gs     # The actual Gmail script code