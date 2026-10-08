"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Calendar, Clock, AlertCircle, Loader2 } from "lucide-react";
import { clinic, services, slots } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsApp";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base text-ink outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15";

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [slot, setSlot] = useState(slots[0]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0].title,
    date: "",
  });

  // Calculate local today's date safely in user timezone
  const todayStr = useMemo(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  // Determine if selected date is Sunday
  const isSunday = useMemo(() => {
    if (!form.date) return false;
    const parts = form.date.split("-").map(Number);
    if (parts.length !== 3) return false;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.getDay() === 0;
  }, [form.date]);

  const setField =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setErrorMessage(null);
      const val = e.target.value;
      setForm((prev) => {
        const next = { ...prev, [key]: val };
        // If switched to Sunday and afternoon/evening was selected, automatically revert to Morning
        if (key === "date") {
          const parts = val.split("-").map(Number);
          if (parts.length === 3) {
            const d = new Date(parts[0], parts[1] - 1, parts[2]);
            if (d.getDay() === 0 && slot !== "Morning") {
              setSlot("Morning");
            }
          }
        }
        return next;
      });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Indian phone validation (10 digits with optional +91)
    const cleanPhone = form.phone.replace(/[\s()-]/g, "");
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (isSunday && slot !== "Morning") {
      setErrorMessage("Sunday clinic hours are 10:00 AM - 2:00 PM. Please select the Morning slot.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slot }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit appointment request.");
      }
      setAppointmentId(data.appointmentId || "SML-REF");
      setDone(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again or chat with us.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${clinic.name}, I just submitted an appointment request online.\n\n*Reference ID:* ${appointmentId || "Pending"}\n*Patient Name:* ${form.name}\n*Treatment:* ${form.service}\n*Preferred Date:* ${form.date}\n*Time Slot:* ${slot}\n*Contact:* ${form.phone}\n\nPlease confirm availability.`
  );
  const waUrl = `https://wa.me/${clinic.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="rounded-[2rem] bg-white p-6 text-ink shadow-2xl ring-1 ring-black/5 sm:p-8">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1, stiffness: 400, damping: 25 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal text-white shadow-lg shadow-teal/30"
            >
              <Check size={32} className="stroke-[3]" />
            </motion.div>

            <span className="mt-4 inline-block rounded-full bg-aqua px-3 py-1 font-mono text-xs font-bold text-teal-dark">
              Ref: {appointmentId}
            </span>

            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
              Appointment Requested!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Thank you, <strong className="text-ink">{form.name}</strong>. Our reception desk will call you at{" "}
              <strong className="text-ink">{form.phone}</strong> within 30 minutes to confirm your{" "}
              <strong>{slot.toLowerCase()}</strong> visit on <strong>{form.date}</strong>.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-md shadow-[#25D366]/30 transition hover:bg-[#1ebd59]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Fast-Track Confirmation via WhatsApp
              </a>

              <button
                type="button"
                onClick={() => {
                  setDone(false);
                  setForm({ name: "", phone: "", service: services[0].title, date: "" });
                }}
                className="mt-2 text-sm font-medium text-teal hover:underline"
              >
                Book another appointment
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            {errorMessage && (
              <div className="flex items-center gap-2.5 rounded-xl bg-rose-50 p-3.5 text-sm text-rose-700 ring-1 ring-rose-200">
                <AlertCircle size={18} className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <label className="grid gap-1.5 text-sm font-semibold text-ink/90">
              Full Name
              <input
                required
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={setField("name")}
                className={field}
                autoComplete="name"
              />
            </label>

            <label className="grid gap-1.5 text-sm font-semibold text-ink/90">
              Phone Number
              <input
                required
                type="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={setField("phone")}
                className={field}
                autoComplete="tel"
              />
            </label>

            <label className="grid gap-1.5 text-sm font-semibold text-ink/90">
              Treatment Required
              <select
                value={form.service}
                onChange={setField("service")}
                className={field}
              >
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Dental Consultation">General Dental Consultation & Checkup</option>
                <option value="Emergency Toothache Care">Emergency Toothache Relief</option>
              </select>
            </label>

            <label className="grid gap-1.5 text-sm font-semibold text-ink/90">
              Preferred Date
              <div className="relative">
                <input
                  required
                  type="date"
                  min={todayStr}
                  value={form.date}
                  onChange={setField("date")}
                  className={field}
                />
              </div>
            </label>

            <fieldset>
              <div className="mb-2 flex items-center justify-between">
                <legend className="text-sm font-semibold text-ink/90">Preferred Time of Day</legend>
                {isSunday && (
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                    Sunday: 10 AM - 2 PM only
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {slots.map((s) => {
                  const isDisabled = isSunday && s !== "Morning";
                  const isSelected = slot === s;
                  return (
                    <button
                      type="button"
                      key={s}
                      disabled={isDisabled}
                      onClick={() => setSlot(s)}
                      aria-pressed={isSelected}
                      className={`relative rounded-xl border py-3 text-sm font-medium transition ${
                        isDisabled
                          ? "border-ink/10 bg-slate-100 text-ink/30 cursor-not-allowed"
                          : isSelected
                          ? "border-teal bg-teal text-white shadow-md shadow-teal/20"
                          : "border-ink/15 text-ink hover:border-teal hover:bg-aqua/20"
                      }`}
                    >
                      {s}
                      {isDisabled && (
                        <span className="block text-[10px] text-ink/40">Closed</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-teal py-4 font-semibold text-white shadow-lg shadow-teal/30 transition hover:bg-teal-dark active:scale-[0.98] disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Securing Appointment Slot...
                </>
              ) : (
                "Request Confirmed Appointment"
              )}
            </button>

            <p className="text-center text-xs text-ink/50">
              🔒 No advance payment required • Free reschedule anytime
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
