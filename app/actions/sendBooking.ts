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
  budget: string;
  message: string;
  honeypot: string;
  recaptchaToken: string;
};

// Spam detection: checks for random garbage strings
function isLikelySpam(text: string): boolean {
  if (!text) return false;
  
  // Random long strings with mixed cases and numbers (typical spam)
  // Pattern: 10+ chars, 60%+ non-vowel alphanumeric
  if (text.length > 12) {
    const nonVowels = (text.match(/[bcdfghjklmnpqrstvwxyz0-9]/gi) || []).length;
    const consonantRatio = nonVowels / text.length;
    if (consonantRatio > 0.6) return true;
  }
  
  // Too many numbers in text meant to be readable (names, event names)
  const numberRatio = (text.match(/\d/g) || []).length / text.length;
  if (numberRatio > 0.3) return true;
  
  return false;
}

// Validate that email looks legitimate
function isValidEmail(email: string): boolean {
  // Basic format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  
  // Check for legitimate domain patterns
  const domain = email.split('@')[1].toLowerCase();
  const knownSpamDomains = ['test.com', 'temp.email', '8.4fatboy@gmail.com'];
  if (knownSpamDomains.includes(email)) return false;
  
  return true;
}

export async function sendBookingEnquiry(data: BookingFormData) {
  // Silently reject bot submissions (honeypot filled)
  if (data.honeypot) {
    return { success: true };
  }

  // Verify reCAPTCHA token
  try {
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.GOOGLE_RE_CAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    // reCAPTCHA v3 returns a score 0.0 to 1.0 (1.0 = likely legitimate)
    // 0.5 is a reasonable threshold
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.log('reCAPTCHA failed or low score:', recaptchaData.score);
      return { success: true }; // Silently reject
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return { success: true }; // Silently reject on error
  }

  // Spam pattern detection
  if (isLikelySpam(data.name) || isLikelySpam(data.eventName) || isLikelySpam(data.location)) {
    console.log('Spam detected in form fields');
    return { success: true }; // Silently reject
  }

  // Email validation
  if (!isValidEmail(data.email)) {
    console.log('Invalid email detected:', data.email);
    return { success: true }; // Silently reject
  }

  // Require at least some fields filled out
  const filledFields = [data.name, data.eventName, data.location, data.budget].filter(f => f && f.trim()).length;
  if (filledFields < 2) {
    console.log('Too few fields filled in submission');
    return { success: true }; // Silently reject
  }

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
            <tr><td style="padding:8px 0;color:#888">Budget</td><td style="padding:8px 0;color:#fff">${data.budget || '—'}</td></tr>
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
            We aim to respond within 48 hours.
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
