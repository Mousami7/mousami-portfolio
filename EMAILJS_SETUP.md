# EmailJS Setup Guide

## Step 1: Get Your EmailJS Credentials

1. **Public Key**: Go to EmailJS Dashboard → Account → General → Public Key
2. **Service ID**: Go to EmailJS Dashboard → Email Services → Your Gmail Service → Service ID
3. **Template ID**: Go to EmailJS Dashboard → Email Templates → Your Template → Template ID

## Step 2: Update script.js

Replace these placeholders in `script.js`:

```javascript
// Line 10: Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY');

// Line 109: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Step 3: Test the Form

1. Go to your portfolio website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox

## Template Content (Already Created)

Your EmailJS template should contain:

```
Subject: New message from {{from_name}} - Portfolio Contact

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

## Free Limits

- **200 emails per month** (free plan)
- **No credit card required**
- **Works immediately after setup**

## Troubleshooting

- Make sure all three IDs are correct
- Check browser console for errors
- Verify Gmail service is connected in EmailJS dashboard
