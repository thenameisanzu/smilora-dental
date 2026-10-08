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

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "services", label: "Services", Icon: Sparkles },
  { id: "whitening", label: "Whitening", Icon: Sparkles },
  { id: "why-us", label: "Why Us", Icon: ShieldCheck },
  { id: "doctors", label: "Doctors", Icon: Users },
  { id: "reviews", label: "Reviews", Icon: Star },
  { id: "book", label: "Book", Icon: CalendarCheck },
  { id: "visit", label: "Visit", Icon: MapPin },
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

      {/* Mobile Bottom Floating Nav Bar with Active Animated Highlighting */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-2xl backdrop-blur-xl md:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-8 px-1">
          {navItems.map(({ id, label, Icon }) => {
            const on = active === id;
            const isBook = id === "book";
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleNavClick(id)}
                  className="relative flex h-14 flex-col items-center justify-center gap-0.5 text-[8.5px] font-semibold active:scale-90 transition-transform"
                >
                  {isBook ? (
                    <span className="-mt-6 grid h-11 w-11 place-items-center rounded-full bg-teal text-white shadow-lg shadow-teal/40 ring-4 ring-white animate-pulse">
                      <Icon size={18} />
                    </span>
                  ) : (
                    <span
                      className={`relative grid h-7 w-8 place-items-center rounded-full transition-colors ${
                        on ? "text-teal" : "text-ink/60"
                      }`}
                    >
                      {on && (
                        <motion.span
                          layoutId="mobileNavPill"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-aqua shadow-sm"
                        />
                      )}
                      <Icon size={16} className="relative z-10" />
                    </span>
                  )}
                  <span className={on || isBook ? "text-teal font-bold" : "text-ink/60"}>
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
