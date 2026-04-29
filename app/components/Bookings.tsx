"use client";

import { useState, useTransition } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import { sendBookingEnquiry } from "../actions/sendBooking";

const STATS = [
  { value: "20+", label: "Years Active" },
  { value: "Japan · US · UK", label: "International" },
  { value: "Headline / Club / Festival", label: "Available For" },
];

export default function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventName: "",
    eventDate: "",
    location: "",
    type: "",
    budget: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const token = await executeRecaptcha("booking");
        const result = await sendBookingEnquiry({
          ...formData,
          recaptchaToken: token,
        });
        setStatus(result.success ? "success" : "error");
      } catch {
        setStatus("error");
      }
    });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 px-4 py-3 text-base focus:outline-none focus:border-emerald-600/80 transition-colors duration-200";

  return (
    <section id="bookings" className="py-16 md:py-20 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
          Book Stack Rack
        </h2>
        <p className="text-gray-400 mb-8 text-base leading-relaxed">
          Headline slots, club nights and international bookings available for
          Q3 2026 and beyond. Fill out the form below with as much info as
          possible about your event, and we&apos;ll get back to you within 48-72
          hours.
        </p>

        <p className="text-gray-400 text-base mb-8 tracking-wide">
          PLEASE NOTE: Replies will only include the full EPK and technical
          rider upon request.
        </p>
        <p className="text-gray-400 mb-8 text-base tracking-wide">
          For urgent enquiries, please email{" "}
          <a href="mailto:stackrack@live.com" className="underline">
            stackrack@live.com
          </a>
          .
        </p>

        <p className="flex items-center gap-2 text-base text-emerald-400/80 mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          Currently taking bookings for Q3 2026 and beyond
        </p>

        {/* Trust stats */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 py-5 mb-6 border-t border-b border-white/8">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-white font-semibold text-base">{s.value}</p>
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {status === "success" ? (
          <div className="py-16 text-center border border-white/8">
            <p className="text-emerald-400 text-sm tracking-[0.5em] uppercase mb-3">
              Enquiry Sent
            </p>
            <p className="text-white text-xl mb-2">
              Thank you for reaching out <br /> We&apos;ll be in touch in the
              next 48-72 hours.
            </p>
            <p className="text-gray-400 text-base my-8">
              A confirmation has been sent to {formData.email}
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  eventName: "",
                  eventDate: "",
                  location: "",
                  type: "",
                  budget: "",
                  message: "",
                  honeypot: "",
                });
              }}
              className="text-xs text-gray-400 hover:text-emerald-400 tracking-[0.2em] uppercase transition-colors duration-200 underline underline-offset-4 cursor-pointer"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot — hidden from real users, traps bots */}
            <div aria-hidden="true" style={{ display: "none" }}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="booking-email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-event-name" className="sr-only">
                  Event / Festival Name
                </label>
                <input
                  id="booking-event-name"
                  type="text"
                  placeholder="Event / Festival Name"
                  value={formData.eventName}
                  onChange={(e) =>
                    setFormData({ ...formData, eventName: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="booking-date" className="sr-only">
                  Event Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) =>
                    setFormData({ ...formData, eventDate: e.target.value })
                  }
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-location" className="sr-only">
                  City / Venue
                </label>
                <input
                  id="booking-location"
                  type="text"
                  placeholder="City / Venue"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="booking-type" className="sr-only">
                  Performance Type
                </label>
                <select
                  id="booking-type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className={`${inputClass} cursor-pointer`}
                >
                  {/* add an empty option */}
                  <option className="bg-[#0a0a0f] text-white" value="" disabled>
                    Performance Type - Please Select
                  </option>
                  <option className="bg-[#0a0a0f] text-white" value="DJ Set">
                    DJ Set
                  </option>

                  <option className="bg-[#0a0a0f] text-white" value="Live Set">
                    Live Set
                  </option>
                  <option className="bg-[#0a0a0f] text-white" value="Both">
                    Both
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-budget" className="sr-only">
                Approximate Budget
              </label>
              <select
                id="booking-budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className={`${inputClass} cursor-pointer`}
              >
                <option className="bg-[#0a0a0f] text-white" value="">
                  Approximate Budget
                </option>
                <option className="bg-[#0a0a0f] text-white" value="Under £500">
                  Under £500
                </option>
                <option
                  className="bg-[#0a0a0f] text-white"
                  value="£500 – £1,000"
                >
                  £500 – £1,000
                </option>
                <option
                  className="bg-[#0a0a0f] text-white"
                  value="£1,000 – £2,000"
                >
                  £1,000 – £2,000
                </option>
                <option className="bg-[#0a0a0f] text-white" value="£2,000+">
                  £2,000+
                </option>
                <option className="bg-[#0a0a0f] text-white" value="To discuss">
                  To discuss
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="booking-message" className="sr-only">
                Message
              </label>
              <textarea
                id="booking-message"
                placeholder="Tell us about your event…"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-base">
                Something went wrong — please try again or email{" "}
                <a href="mailto:stackrack@live.com" className="underline">
                  stackrack@live.com
                </a>{" "}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-white font-semibold tracking-[0.2em] text-base uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(29,78,216,0.5)]"
            >
              {isPending ? "Sending…" : "Send Booking Enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
