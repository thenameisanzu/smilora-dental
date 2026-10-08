import Image from "next/image";
import { Phone, Star, CheckCircle2, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { clinic } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist/70 via-white to-white py-10 lg:py-16">
      {/* Subtle ambient gradients */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-aqua/40 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-teal/10 blur-2xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Copy, Action CTAs & Trust Points */}
          <div className="text-center lg:col-span-7 lg:text-left">
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
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-5xl xl:text-6xl">
              Gentle dentistry <br />
              <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
                for a brighter smile.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              {clinic.subtitle}
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
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

            {/* Trust & Guarantee Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:max-w-xl">
              <div className="flex items-center gap-2 rounded-xl border border-ink/5 bg-white/90 p-2.5 shadow-sm text-xs font-bold text-ink">
                <CheckCircle2 size={15} className="shrink-0 text-teal" />
                <span>100% Painless</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-ink/5 bg-white/90 p-2.5 shadow-sm text-xs font-bold text-ink">
                <Clock size={15} className="shrink-0 text-teal" />
                <span>Zero Wait</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-ink/5 bg-white/90 p-2.5 shadow-sm text-xs font-bold text-ink">
                <Sparkles size={15} className="shrink-0 text-teal" />
                <span>3D Scans</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-ink/5 bg-white/90 p-2.5 shadow-sm text-xs font-bold text-ink">
                <ShieldCheck size={15} className="shrink-0 text-teal" />
                <span>0% EMI</span>
              </div>
            </div>

            {/* Location Subtext */}
            <p className="mt-4 text-xs font-medium text-ink/60">
              📍 Skyline Arcade, Edappally, Kochi • Mon–Sat 9am–8pm, Sun 10am–2pm
            </p>
          </div>

          {/* Right Column: Hero Visual Card with Floating Badges */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-2xl transition-transform duration-500 hover:shadow-teal/10">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/4]">
                <Image
                  src="/images/hero-dental.jpg"
                  alt="Smilora Dental Care Kochi - Modern Dental Consultation"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Glassmorphism Badges on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-white">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-2.5 text-ink shadow-lg backdrop-blur-md">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal text-white">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">Modern Dental Studio</p>
                    <p className="text-[11px] text-ink/60">Digital 3D Scans & Laser Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
