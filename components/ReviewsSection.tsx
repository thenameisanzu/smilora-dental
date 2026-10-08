"use client";
import { useState } from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/lib/content";

const categories = ["All Stories", "Teeth Whitening", "Root Canal", "Clear Aligners", "Kids Dentistry"];

export default function ReviewsSection() {
  const [selectedCat, setSelectedCat] = useState("All Stories");

  const filtered = selectedCat === "All Stories"
    ? reviews
    : reviews.filter((r) => r.treatment.toLowerCase().includes(selectedCat.toLowerCase().replace("stories", "").trim()));

  return (
    <div>
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCat === cat;
          return (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`relative rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? "bg-teal text-white shadow-md shadow-teal/30 scale-105"
                  : "bg-mist text-ink/70 hover:bg-aqua/50 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Animated Review Cards Grid */}
      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((r) => (
            <motion.blockquote
              layout
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 size={13} className="text-teal" /> Verified
                  </span>
                </div>
                <span className="mt-3 inline-block rounded-md bg-aqua/50 px-2.5 py-0.5 text-[11px] font-semibold text-teal-dark">
                  {r.treatment}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">&ldquo;{r.text}&rdquo;</p>
              </div>
              <footer className="mt-5 border-t border-ink/10 pt-3">
                <div className="text-sm font-bold text-ink">{r.name}</div>
                <div className="text-xs text-ink/60">{r.place}</div>
              </footer>
            </motion.blockquote>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
