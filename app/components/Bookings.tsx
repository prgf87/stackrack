"use client";

import { useState, useTransition } from "react";
import { sendBookingEnquiry } from "../actions/sendBooking";

export default function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventName: "",
    eventDate: "",
    location: "",
    type: "DJ Set",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await sendBookingEnquiry(formData);
      setStatus(result.success ? "success" : "error");
    });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-blue-600/80 transition-colors duration-200";

  return (
    <section id="bookings" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-5">
          Get in Touch
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
          Book Stack Rack
        </h2>
        <p className="text-gray-400 mb-12 text-sm leading-relaxed">
          Headline slots, club nights and international bookings — with a
          proven track record across Japan, the US and the UK.
        </p>

        {status === "success" ? (
          <div className="py-16 text-center border border-white/8">
            <p className="text-emerald-400 text-xs tracking-[0.5em] uppercase mb-3">
              Enquiry Sent
            </p>
            <p className="text-white text-lg mb-2">
              Thanks — we&apos;ll be in touch.
            </p>
            <p className="text-gray-600 text-sm">
              A confirmation has been sent to {formData.email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="sr-only">Your Name</label>
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
                <label htmlFor="booking-email" className="sr-only">Your Email</label>
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
                <label htmlFor="booking-event-name" className="sr-only">Event / Festival Name</label>
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
                <label htmlFor="booking-date" className="sr-only">Event Date</label>
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
                <label htmlFor="booking-location" className="sr-only">City / Venue</label>
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
                <label htmlFor="booking-type" className="sr-only">Performance Type</label>
                <select
                  id="booking-type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className={`${inputClass} cursor-pointer`}
                >
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
              <label htmlFor="booking-message" className="sr-only">Message</label>
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
              <p className="text-red-400 text-sm">
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
              className="w-full py-4 bg-blue-700 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold tracking-[0.2em] text-sm uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(29,78,216,0.5)]"
            >
              {isPending ? "Sending…" : "Send Booking Enquiry"}
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-white/8 grid sm:grid-cols-2 gap-4 text-center sm:text-left">
          <div>
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">
              Email
            </p>
            <a
              href="mailto:stackrack@live.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm underline underline-offset-2"
            >
              stackrack@live.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">
              Phone
            </p>
            <a
              href="tel:+447472097891"
              className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-2"
            >
              +44 7472 097891
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
