import Image from "next/image";
import {
  Baby,
  Clock,
  Droplets,
  Gem,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Award,
  Cpu,
  Heart,
  Scan,
  Shield,
  ArrowRight,
} from "lucide-react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import WhatsApp from "@/components/WhatsApp";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import ReviewsSection from "@/components/ReviewsSection";
import {
  clinic,
  doctors,
  services,
  whyUs,
  whiteningShowcase,
  faqs,
} from "@/lib/content";

const serviceIcons: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  gem: Gem,
  scan: Scan,
  baby: Baby,
  smile: Smile,
};

const whyIcons: Record<string, typeof Award> = {
  award: Award,
  cpu: Cpu,
  heart: Heart,
};

const wrap = "mx-auto max-w-6xl px-5";
const h2 = "font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://smiloradental.com/#dentist",
        name: clinic.name,
        image: "https://smiloradental.com/images/whitening-after.jpg",
        description: clinic.subtitle,
        url: "https://smiloradental.com",
        telephone: clinic.phone,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd Floor, Skyline Arcade, NH 66 Bypass",
          addressLocality: "Edappally",
          addressRegion: "Kerala",
          postalCode: "682024",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.0261,
          longitude: 76.3125,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "10:00",
            closes: "14:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: clinic.googleRating.toString(),
          reviewCount: clinic.reviewCount.toString(),
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* 1. Services Section */}
        <section id="services" className={`${wrap} py-16 md:py-24`}>
          <div className="text-center">
            <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
              Our services
            </span>
            <h2 className={`${h2} mt-3`}>Complete dental care under one roof</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/70">
              Modern clinical treatments delivered with gentle hands and advanced dental technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, icon, duration }) => {
              const Icon = serviceIcons[icon] || Sparkles;
              return (
                <article
                  key={title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white group-hover:shadow-md group-hover:shadow-teal/20">
                        <Icon size={22} />
                      </span>
                      <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink/70">
                        {duration}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink transition-colors group-hover:text-teal-dark">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{desc}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-end border-t border-ink/5 pt-4">
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1 rounded-full bg-aqua/50 px-4 py-2 text-xs font-bold text-teal-dark transition-all duration-200 hover:scale-105 hover:bg-teal hover:text-white"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 2. Transform Your Smile — Dedicated Teeth Whitening Showcase */}
        <section id="whitening" className="border-y border-ink/10 bg-gradient-to-b from-mist/80 to-white py-16 md:py-24">
          <div className={wrap}>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
                  <Sparkles size={13} className="text-teal" />
                  {whiteningShowcase.badge}
                </span>
                <h2 className={`${h2} mt-3`}>{whiteningShowcase.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink/75">
                  {whiteningShowcase.description}
                </p>

                <div className="mt-8 space-y-6">
                  {whiteningShowcase.features.map((feat) => (
                    <div key={feat.title} className="group flex gap-4 transition-transform hover:translate-x-1">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal text-white shadow-sm transition-transform group-hover:scale-110">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold text-ink">{feat.title}</h4>
                        <p className="mt-1 text-sm text-ink/70">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-semibold text-white shadow-md shadow-teal/30 transition-all hover:scale-105 hover:bg-teal-dark"
                  >
                    <span>Book a Whitening Session</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-white p-4 shadow-xl ring-1 ring-ink/10 md:p-6 transition-all duration-300 hover:shadow-2xl">
                  <BeforeAfter
                    before="/images/whitening-before.jpg"
                    after="/images/whitening-after.jpg"
                    beforeLabel="Before (Stained Enamel)"
                    afterLabel="After 45-Min Whitening"
                  />
                  <div className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-teal-dark">
                    ← Drag slider or click presets above to compare →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Us Section ("Why Smilora") */}
        <section id="why-us" className={`${wrap} py-16 md:py-24`}>
          <div className="text-center">
            <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
              Why {clinic.shortName}
            </span>
            <h2 className={`${h2} mt-3`}>Kochi&apos;s trusted family dental clinic</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/70">
              We combine clinical expertise with patient-first hospitality to make your visit calm and stress-free.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyUs.map((item) => {
              const Icon = whyIcons[item.icon] || Award;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-lg"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-aqua text-teal-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white group-hover:shadow-md">
                    <Icon size={30} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Doctors Panel */}
        <section id="doctors" className="bg-mist/80 py-16 md:py-24">
          <div className={wrap}>
            <div className="text-center">
              <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
                Meet Our Specialists
              </span>
              <h2 className={`${h2} mt-3`}>Our Doctors Panel</h2>
              <p className="mx-auto mt-3 max-w-lg text-ink/70">
                A multi-specialist team dedicated to specialized, painless and ethical dental care.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((d) => (
                <div
                  key={d.name}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-64 w-full overflow-hidden bg-mist">
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className="rounded-full bg-aqua/50 px-2 py-0.5 text-[11px] font-semibold text-teal-dark">
                        {d.experience}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-ink">{d.name}</h3>
                      <p className="text-xs font-semibold text-teal-dark">{d.role}</p>
                      <p className="mt-1 text-[11px] text-ink/60">{d.credentials}</p>
                      <p className="mt-2.5 text-xs leading-relaxed text-ink/75">{d.specialty}</p>
                    </div>

                    <a
                      href="#book"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal transition-colors hover:text-teal-dark"
                    >
                      <span>Book consult</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Reviews Section with Interactive Filter Tabs */}
        <section id="reviews" className={`${wrap} py-16 md:py-24`}>
          <div className="text-center">
            <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
              Patient stories
            </span>
            <h2 className={`${h2} mt-3`}>Loved by patients across Kochi</h2>
            <p className="mx-auto mt-3 max-w-lg text-ink/70">
              Read authentic feedback from families and working professionals treated at Smilora.
            </p>
          </div>

          <div className="mt-10">
            <ReviewsSection />
          </div>
        </section>

        {/* 6. FAQs Section */}
        <section id="faq" className="bg-mist/50 py-16 md:py-24">
          <div className={wrap}>
            <div className="text-center">
              <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
                Common Questions
              </span>
              <h2 className={`${h2} mt-3`}>Frequently Asked Questions</h2>
              <p className="mx-auto mt-3 max-w-lg text-ink/70">
                Clear answers regarding procedures, zero waiting time, and clinic comfort.
              </p>
            </div>
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </section>

        {/* 7. Book Appointment & Visit */}
        <section id="book" className="bg-ink py-16 text-white md:py-24">
          <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-aqua">
                Book appointment
              </span>
              <h2 className={`${h2} mt-3 text-white`}>
                Ready for a healthier, brighter smile?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Select your preferred doctor or dental treatment. Our desk will confirm your appointment time within 30 minutes.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={18} />
                  <div>
                    <h4 className="text-sm font-bold">Zero advance payment</h4>
                    <p className="text-xs text-white/60">Pay only after your consultation or procedure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={18} />
                  <div>
                    <h4 className="text-sm font-bold">Same-day emergency slots</h4>
                    <p className="text-xs text-white/60">Acute toothaches and dental trauma handled promptly</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-xs text-white/70">Need urgent assistance?</p>
                <a
                  href={`tel:${clinic.tel}`}
                  className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-aqua hover:underline"
                >
                  <Phone size={20} /> {clinic.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Booking />
            </div>
          </div>
        </section>

        {/* 8. Visit & Map Section */}
        <section id="visit" className={`${wrap} py-16 md:py-24`}>
          <div className="text-center md:text-left">
            <span className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-bold text-teal-dark">
              Visit Us
            </span>
            <h2 className={`${h2} mt-3`}>Find us in Edappally, Kochi</h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm md:col-span-3">
              <iframe
                title="Smilora Dental Care Location Map in Edappally Kochi"
                src={clinic.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 md:h-full md:min-h-[400px]"
              />
            </div>

            <div className="flex flex-col justify-between space-y-6 rounded-[2rem] bg-mist/70 p-6 md:col-span-2 md:p-8">
              <div className="space-y-5">
                <div className="flex gap-3.5">
                  <MapPin className="mt-1 shrink-0 text-teal" size={22} />
                  <div>
                    <h4 className="text-sm font-bold text-ink">Address</h4>
                    <p className="mt-0.5 text-sm text-ink/75">{clinic.address}</p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Phone className="mt-1 shrink-0 text-teal" size={22} />
                  <div>
                    <h4 className="text-sm font-bold text-ink">Phone</h4>
                    <a
                      href={`tel:${clinic.tel}`}
                      className="mt-0.5 block text-sm font-semibold text-teal-dark hover:underline"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Clock className="mt-1 shrink-0 text-teal" size={22} />
                  <div>
                    <h4 className="text-sm font-bold text-ink">Hours</h4>
                    <div className="mt-1 space-y-1 text-sm text-ink/75">
                      {clinic.hours.map(([days, time]) => (
                        <div key={days} className="flex flex-col text-xs sm:text-sm">
                          <span className="font-semibold text-ink">{days}</span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={clinic.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-bold text-white shadow-md shadow-teal/20 transition-all hover:scale-[1.02] hover:bg-teal-dark"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-white py-10 text-ink/70">
        <div className={`${wrap} flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left`}>
          <div>
            <div className="flex items-center justify-center gap-2 font-display text-base font-bold text-ink md:justify-start">
              <Smile size={20} className="text-teal" /> {clinic.name}
            </div>
            <p className="mt-1 text-xs text-ink/60">
              © {new Date().getFullYear()} {clinic.name} · Edappally, Kochi. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-ink/70">
            <a href="#services" className="hover:text-teal transition-colors">Services</a>
            <a href="#whitening" className="hover:text-teal transition-colors">Whitening</a>
            <a href="#why-us" className="hover:text-teal transition-colors">Why us</a>
            <a href="#doctors" className="hover:text-teal transition-colors">Doctors</a>
            <a href="#reviews" className="hover:text-teal transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-teal transition-colors">Visit</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <WhatsApp />
    </>
  );
}
