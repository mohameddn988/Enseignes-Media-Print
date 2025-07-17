import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  console.log('🔍 Contact API route called');
  try {
    const body: ContactFormData = await request.json();
    console.log('📝 Form data received:', body);
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter - You'll need to configure this with your email service
    // For now, I'll use a generic SMTP configuration that you can customize
    console.log('📧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    });

    // Email to you (the business owner)
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@enseignesmediaprint.com',
      to: process.env.CONTACT_EMAIL || 'enseignesmediaprint@gmail.com',
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #32B8F1 0%, #1e8bb8 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .header p { font-size: 14px; opacity: 0.9; }
            .content { padding: 30px 20px; }
            .client-info { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #32B8F1; }
            .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 25px; }
            .info-item { background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; }
            .info-label { font-weight: 600; color: #495057; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-value { font-size: 16px; color: #212529; }
            .message-section { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 20px; }
            .message-content { background-color: white; padding: 15px; border-radius: 6px; border-left: 3px solid #FC32A2; font-style: italic; }
            .footer { background-color: #343a40; color: white; padding: 20px; text-align: center; font-size: 12px; }
            .urgent { background-color: #fff3cd; border-color: #ffeaa7; color: #856404; padding: 10px; border-radius: 6px; margin-bottom: 20px; }
            .divider { height: 1px; background: linear-gradient(to right, transparent, #dee2e6, transparent); margin: 20px 0; }
            @media (max-width: 600px) {
              .container { margin: 10px; }
              .content { padding: 20px 15px; }
              .info-grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Enseignes MEDIAPRINT - Website Contact Form</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⚡ New Lead Alert:</strong> Someone is interested in your services and needs a response within 24 hours.
              </div>
              
              <div class="client-info">
                <h2 style="color: #32B8F1; margin-bottom: 15px; font-size: 18px;">👤 Client Information</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value"><strong>${name}</strong></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email Address</div>
                    <div class="info-value"><a href="mailto:${email}" style="color: #32B8F1; text-decoration: none;">${email}</a></div>
                  </div>
                  ${phone ? `
                  <div class="info-item">
                    <div class="info-label">Phone Number</div>
                    <div class="info-value"><a href="tel:${phone}" style="color: #32B8F1; text-decoration: none;">${phone}</a></div>
                  </div>
                  ` : ''}
                  ${company ? `
                  <div class="info-item">
                    <div class="info-label">Company Name</div>
                    <div class="info-value">${company}</div>
                  </div>
                  ` : ''}
                  ${service ? `
                  <div class="info-item">
                    <div class="info-label">Service Requested</div>
                    <div class="info-value"><span style="background-color: #FC32A2; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px;">${service}</span></div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div class="message-section">
                <h3 style="color: #343a40; margin-bottom: 15px; font-size: 16px;">💬 Project Details & Message</h3>
                <div class="message-content">
                  "${message}"
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div style="text-align: center; margin-top: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 500px; margin: 0 auto; padding: 0 20px;">
                    <a href="mailto:${email}" style="background-color: #32B8F1; color: white;margin-right: 15px; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">📧 Reply via Email</a>
                    ${phone ? `<a href="tel:${phone}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center;">📞 Call Now</a>` : ''}
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>Enseignes MEDIAPRINT</strong> | 8236 Rue Pascal-Gagnon, Montréal</p>
              <p>📞 +1 (514) 691-2512 | 📧 enseignesmediaprint@gmail.com</p>
              <p style="margin-top: 10px; opacity: 0.8;">This email was automatically generated from your website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
🔔 NEW CONTACT FORM SUBMISSION
==============================

👤 CLIENT INFORMATION:
• Name: ${name}
• Email: ${email}
${phone ? `• Phone: ${phone}` : ''}
${company ? `• Company: ${company}` : ''}
${service ? `• Service: ${service}` : ''}

💬 PROJECT DETAILS:
${message}

🚀 NEXT STEPS:
• Respond within 24 hours for best conversion
• Email: ${email}
${phone ? `• Call: ${phone}` : ''}

---
Enseignes MEDIAPRINT
8236 Rue Pascal-Gagnon, Montréal
+1 (514) 691-2512
      `,
    };



    // Send business notification email only
    console.log('📤 Sending business notification email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Business notification email sent');

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
