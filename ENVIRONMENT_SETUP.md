# Environment Setup

This project uses a simple contact form that sends emails directly to your inbox.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ciditconsultancy.com

# Email Configuration (choose one option below)

# Option 1: Resend (Recommended for production)
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=info@yourdomain.com

# Option 2: EmailJS (Alternative for development)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=info@yourdomain.com

# Option 3: Development only (no email service)
# No additional variables needed - form submissions will be logged to console
```

## Email Service Setup

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add your domain for sending emails
4. Set the environment variables above

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Set the environment variables above

### Option 3: Development Mode
- No setup required
- Form submissions will be logged to the console
- Perfect for testing and development

## Form Features

The contact form includes:
- Client-side validation for required fields and email format
- Server-side validation for all inputs
- Professional HTML email template
- Automatic email delivery
- Form submission tracking

## Development vs Production

- **Development**: Works with console logging (no email service needed)
- **Production**: Configure Resend or EmailJS for reliable email delivery

## Security Notes

- Never commit `.env.local` to version control
- Email addresses are validated on both client and server
- Consider implementing rate limiting for high-traffic sites 