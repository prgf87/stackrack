'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Stack Rack <noreply@stackrack.co.uk>';

export type BookingFormData = {
  name: string;
  email: string;
  eventName: string;
  eventDate: string;
  location: string;
  type: string;
  message: string;
};

export async function sendBookingEnquiry(data: BookingFormData) {
  try {
    // Notification to Stack Rack
    await resend.emails.send({
      from: FROM,
      to: 'stackrack@live.com',
      subject: `Booking Enquiry: ${data.eventName || 'New Enquiry'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#ccc;padding:32px;border:1px solid #222">
          <h2 style="color:#00ff88;font-size:20px;margin:0 0 24px">New Booking Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0;color:#fff">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0;color:#fff"><a href="mailto:${data.email}" style="color:#00ff88">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Event</td><td style="padding:8px 0;color:#fff">${data.eventName || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Date</td><td style="padding:8px 0;color:#fff">${data.eventDate || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Location</td><td style="padding:8px 0;color:#fff">${data.location || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Type</td><td style="padding:8px 0;color:#fff">${data.type}</td></tr>
          </table>
          ${data.message ? `<div style="margin-top:20px;padding:16px;background:#111;border-left:2px solid #00ff88;font-size:14px;color:#ccc">${data.message}</div>` : ''}
        </div>
      `,
    });

    // Confirmation to promoter
    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: 'Booking Enquiry Received — Stack Rack',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#ccc;padding:32px;border:1px solid #222">
          <h2 style="color:#00ff88;font-size:20px;margin:0 0 16px">Thanks, ${data.name}.</h2>
          <p style="font-size:14px;line-height:1.6;color:#aaa;margin:0 0 16px">
            Your booking enquiry for <strong style="color:#fff">${data.eventName || 'your event'}</strong> has been received.
            We'll be in touch as soon as possible.
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
