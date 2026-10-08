import Image from "next/image";
import { Phone, Star, CheckCircle2, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { clinic } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white py-12 md:py-20">
      {/* Subtle ambient gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full -translate-x-1/2 max-w-5xl rounded-full bg-aqua/40 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-teal/10 blur-2xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
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
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Gentle dentistry <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              for a brighter smile.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {clinic.subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition hover:-translate-y-0.5 hover:bg-teal-dark"
            >
              <span>Book appointment</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${clinic.tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-teal hover:text-teal"
            >
              <Phone size={16} className="text-teal" />
              <span>{clinic.phone}</span>
            </a>
          </div>
        </div>

        {/* Hero Stock Image Banner with Floating Glass Cards */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-2xl">
          <div className="relative aspect-[16/9] w-full max-h-[480px]">
            <Image
              src="/images/hero-dental.jpg"
              alt="Smilora Dental Care Kochi - Modern Dental Consultation"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          {/* Floating Glassmorphism Badges on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
            <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-2.5 text-ink shadow-lg backdrop-blur-md">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-ink">State-of-the-Art Clinic</p>
                <p className="text-[11px] text-ink/60">Digital 3D Scans & Laser Tech</p>
              </div>
            </div>

            <div className="hidden rounded-2xl bg-ink/80 px-4 py-2.5 text-white shadow-lg backdrop-blur-md sm:flex sm:items-center sm:gap-3">
              <ShieldCheck size={20} className="text-teal" />
              <span className="text-xs font-semibold">100% Painless Dentistry Protocol</span>
            </div>
          </div>
        </div>

        {/* Trust & Guarantee Highlights Bar */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-4">
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
        <p className="mt-5 text-center text-xs font-medium text-ink/60">
          📍 Skyline Arcade, Edappally, Kochi • Open Mon–Sat 9am–8pm, Sun 10am–2pm
        </p>
      </div>
    </section>
  );
}
