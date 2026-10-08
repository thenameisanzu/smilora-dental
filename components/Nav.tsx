"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  CalendarCheck,
  Home,
  MapPin,
  Phone,
  Smile,
  Sparkles,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";
import { clinic } from "@/lib/content";

const mobileNavItems = [
  { id: "home", label: "Home", Icon: Home, relatedSections: ["home"] },
  { id: "services", label: "Services", Icon: Sparkles, relatedSections: ["services", "whitening"] },
  { id: "book", label: "Book", Icon: CalendarCheck, isCenterCTA: true, relatedSections: ["book"] },
  { id: "doctors", label: "Doctors", Icon: Users, relatedSections: ["doctors", "why-us", "reviews"] },
  { id: "visit", label: "Visit", Icon: MapPin, relatedSections: ["visit", "faq"] },
];

const deskItems = [
  { id: "services", label: "Services" },
  { id: "whitening", label: "Whitening" },
  { id: "why-us", label: "Why us" },
  { id: "doctors", label: "Doctors" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQs" },
  { id: "visit", label: "Visit" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const isClickScrolling = useRef(false);

  // Top page scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sectionIds = ["home", "services", "whitening", "why-us", "doctors", "reviews", "faq", "book", "visit"];
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollPos = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id);
    isClickScrolling.current = true;
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/90 shadow-sm backdrop-blur-xl transition-all">
        {/* Animated Scroll Progress Bar */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-teal via-[#20B2AA] to-teal-dark"
          style={{ scaleX }}
        />

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          {/* Logo with interactive hover bounce */}
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="group flex items-center gap-2.5 font-display text-lg font-bold text-ink"
          >
            <motion.span
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-teal text-white shadow-sm"
            >
              <Smile size={20} />
            </motion.span>
            <span className="tracking-tight transition-colors group-hover:text-teal">{clinic.name}</span>
          </a>

          {/* Desktop Navigation with Animated Pill Highlighting */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {deskItems.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={handleNavClick(id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-[14px] font-semibold transition-colors duration-200 ${
                    isActive ? "text-teal font-bold" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDeskPill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-aqua/70 ring-1 ring-teal/20"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}

            <a
              href="#book"
              onClick={handleNavClick("book")}
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2 text-[14px] font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-teal-dark active:scale-95"
            >
              <CalendarCheck size={16} />
              <span>Book appointment</span>
            </a>
          </nav>

          {/* Mobile Direct Phone Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${clinic.tel}`}
              aria-label="Call clinic directly"
              className="flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1.5 text-xs font-bold text-teal-dark active:scale-95"
            >
              <Phone size={14} className="text-teal" />
              <span>Call clinic</span>
            </a>
          </div>
        </div>
      </header>

      {/* Redesigned Clean Mobile Floating Island Bottom Nav */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed inset-x-3 bottom-3 z-50 max-w-lg mx-auto rounded-2xl border border-ink/10 bg-white/95 px-2 py-1.5 shadow-[0_10px_35px_rgba(14,154,167,0.15)] backdrop-blur-2xl md:hidden"
      >
        <ul className="grid grid-cols-5 items-center justify-items-center">
          {mobileNavItems.map(({ id, label, Icon, isCenterCTA, relatedSections }) => {
            const isTabActive = relatedSections.includes(active) || active === id;

            if (isCenterCTA) {
              return (
                <li key={id} className="flex justify-center">
                  <a
                    href={`#${id}`}
                    onClick={handleNavClick(id)}
                    className="group relative -mt-5 flex flex-col items-center justify-center focus:outline-none"
                    aria-label="Book an Appointment"
                  >
                    <motion.div
                      whileTap={{ scale: 0.92 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-teal to-[#16B4C4] text-white shadow-lg shadow-teal/40 ring-4 ring-white transition-transform group-hover:scale-105"
                    >
                      <Icon size={22} className="stroke-[2.2]" />
                    </motion.div>
                    <span className="mt-0.5 text-[10.5px] font-bold text-teal tracking-tight">
                      {label}
                    </span>
                  </a>
                </li>
              );
            }

            return (
              <li key={id} className="w-full">
                <a
                  href={`#${id}`}
                  onClick={handleNavClick(id)}
                  className={`relative flex h-12 w-full flex-col items-center justify-center rounded-xl py-1 transition-all duration-200 active:scale-95 ${
                    isTabActive ? "text-teal" : "text-ink/60 hover:text-ink/80"
                  }`}
                >
                  {isTabActive && (
                    <motion.span
                      layoutId="mobileActiveTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-x-2 inset-y-1 rounded-xl bg-aqua/70 -z-10"
                    />
                  )}
                  <Icon size={19} className={`transition-transform duration-200 ${isTabActive ? "scale-110 stroke-[2.2]" : "stroke-[1.8]"}`} />
                  <span className={`text-[11px] mt-0.5 font-medium tracking-tight ${isTabActive ? "font-bold text-teal" : "text-ink/70"}`}>
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
