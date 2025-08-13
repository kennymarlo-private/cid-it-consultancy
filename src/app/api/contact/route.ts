import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend (recommended) or alternative service
        const emailData = {
            from: process.env.FROM_EMAIL || 'noreply@ciditconsultancy.com',
            to: process.env.TO_EMAIL || 'info@ciditconsultancy.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">New Contact Form Submission</h2>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div style="text-align: center; color: #64748b; font-size: 14px;">
                        <p>This message was sent from the CID IT Consultancy contact form.</p>
                        <p>Submitted on: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
        };

        // Option 1: Using Resend (recommended for production)
        if (process.env.RESEND_API_KEY) {
            const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            if (resendResponse.ok) {
                return NextResponse.json({ success: true, message: 'Email sent successfully' });
            } else {
                const errorData = await resendResponse.json();
                console.error('Resend API error:', errorData);
                throw new Error('Failed to send email via Resend');
            }
        }
        
        // Option 2: Using EmailJS (fallback for development)
        else if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY) {
            const emailjsResponse = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: process.env.EMAILJS_SERVICE_ID,
                    template_id: process.env.EMAILJS_TEMPLATE_ID,
                    user_id: process.env.EMAILJS_PUBLIC_KEY,
                    template_params: {
                        from_name: name,
                        from_email: email,
                        message: message,
                        to_email: process.env.TO_EMAIL || 'info@ciditconsultancy.com',
                    },
                }),
            });

            if (emailjsResponse.ok) {
                return NextResponse.json({ success: true, message: 'Email sent successfully' });
            } else {
                throw new Error('Failed to send email via EmailJS');
            }
        }
        
        // Option 3: Simple console log for development (no email service configured)
        else {
            console.log('=== CONTACT FORM SUBMISSION ===');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('===============================');
            
            return NextResponse.json({ 
                success: true, 
                message: 'Form submitted successfully (check console for details)' 
            });
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
} 