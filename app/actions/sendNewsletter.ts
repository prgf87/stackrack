'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Stack Rack <noreply@stackrack.co.uk>';

export async function sendNewsletterSignup(email: string) {
  try {
    // Notification to Stack Rack
    await resend.emails.send({
      from: FROM,
      to: 'stackrack@live.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#ccc;padding:32px;border:1px solid #222">
          <h2 style="color:#00ff88;font-size:20px;margin:0 0 16px">New Newsletter Subscriber</h2>
          <p style="font-size:14px;color:#aaa;margin:0"><strong style="color:#fff">${email}</strong> just subscribed to your mailing list.</p>
        </div>
      `,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the list — Stack Rack",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#ccc;padding:32px;border:1px solid #222">
          <h2 style="color:#00ff88;font-size:20px;margin:0 0 16px">You're on the list.</h2>
          <p style="font-size:14px;line-height:1.6;color:#aaa;margin:0 0 16px">
            Thanks for subscribing to the Stack Rack mailing list. You'll be the first to hear about new releases, mixes and upcoming shows.
          </p>
          <p style="font-size:13px;color:#666;margin:24px 0 0;border-top:1px solid #1a1a1a;padding-top:16px">
            Stack Rack · <a href="mailto:stackrack@live.com" style="color:#00ff88">stackrack@live.com</a>
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Resend error:', err);
    return { success: false };
  }
}
