# Discord Webhook Setup for Contact Form

## How to Create a Discord Webhook

Follow these steps to set up your Discord webhook:

### 1. Create or Select a Discord Channel
- Go to your Discord server
- Choose the channel where you want to receive contact form submissions
- We recommend creating a dedicated channel like `#contact-forms` or `#website-inquiries`

### 2. Create the Webhook
1. **Right-click** on the channel name
2. Click **"Edit Channel"**
3. Go to the **"Integrations"** tab
4. Click **"Create Webhook"** or **"View Webhooks"** → **"New Webhook"**
5. Give it a name like "ML Club Contact Form"
6. (Optional) Upload a custom avatar icon
7. Click **"Copy Webhook URL"**

### 3. Add Webhook URL to Your Code
1. Open the file: `js/contact.js`
2. Find line 4 that says:
   ```javascript
   const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
   ```
3. Replace `'YOUR_DISCORD_WEBHOOK_URL_HERE'` with your actual webhook URL:
   ```javascript
   const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN';
   ```

### 4. Test the Form
1. Go to your contact page
2. Fill out the form with test data
3. Submit the form
4. Check your Discord channel for the message!

## What the Discord Message Looks Like

When someone submits the contact form, you'll receive a beautiful embedded message containing:
- 👤 **Name**: The person's full name
- 📧 **Email**: Their email address
- 📚 **Grade Level**: Their grade
- 🎯 **Area of Interest**: What they're interested in
- 💡 **Experience Level**: Their ML experience
- 💬 **Message**: Their full message
- 🕒 **Timestamp**: When they submitted

## Security Note

⚠️ **Important**: Never commit your webhook URL to a public repository! 

If you're using Git:
1. Consider using environment variables or a config file
2. Add the config file to `.gitignore`
3. For production, use a backend service to keep the webhook URL secret

## Need Help?

If you encounter any issues:
1. Make sure the webhook URL is correct
2. Check that the Discord channel still exists
3. Verify the webhook wasn't deleted
4. Test the webhook using a tool like Postman or curl

---

**Setup Complete!** Your contact form will now send submissions directly to Discord! 🎉
