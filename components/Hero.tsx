import { Phone, Star, CheckCircle2, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { clinic } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white py-16 md:py-28">
      {/* Subtle ambient gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full -translate-x-1/2 max-w-4xl rounded-full bg-aqua/40 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-teal/10 blur-2xl" />

      <div className="mx-auto max-w-4xl px-5 text-center">
        {/* Rating & Trust Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/95 px-4 py-1.5 shadow-sm">
          <span className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="text-xs font-bold text-ink">
            {clinic.googleRating} / 5.0 Rating
          </span>
          <span className="text-xs text-ink/60">
            ({clinic.reviewCount}+ Google Reviews)
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-6xl md:text-[4rem]">
          Gentle dentistry <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
            for a brighter smile.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">
          {clinic.subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal/30 transition hover:-translate-y-0.5 hover:bg-teal-dark"
          >
            <span>Book appointment</span>
            <ArrowRight size={18} />
          </a>
          <a
            href={`tel:${clinic.tel}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-teal hover:text-teal"
          >
            <Phone size={18} className="text-teal" />
            <span>{clinic.phone}</span>
          </a>
        </div>

        {/* Trust & Guarantee Highlights */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-ink/10 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-ink">
            <CheckCircle2 size={16} className="shrink-0 text-teal" /> 100% Painless
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-ink">
            <Clock size={16} className="shrink-0 text-teal" /> Zero Wait Time
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-ink">
            <Sparkles size={16} className="shrink-0 text-teal" /> 3D Digital Scans
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-ink">
            <ShieldCheck size={16} className="shrink-0 text-teal" /> 0% Interest EMI
          </div>
        </div>

        {/* Location & Hours Subtext */}
        <p className="mt-6 text-xs font-medium text-ink/60">
          📍 Skyline Arcade, Edappally, Kochi • Open Mon–Sat 9am–8pm, Sun 10am–2pm
        </p>
      </div>
    </section>
  );
}
