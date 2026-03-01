import React from "react";
import { motion } from "motion/react";

interface LifestyleProps {
  onShowToast: (msg: string) => void;
}

export default function Lifestyle({ onShowToast }: LifestyleProps) {
  return (
    <section
      id="lifestyle"
      className="relative min-h-screen w-full overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-20 h-20 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-12"
          >
            <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
          </motion.div>

          <span className="text-xs font-bold uppercase tracking-[0.5em] text-brand-gold block">
            The Lifestyle
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-white leading-[0.9]">
            Beyond the <br />{" "}
            <span className="italic font-serif font-normal text-brand-silver">
              Horizon.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Drolawg is more than a timepiece. It is a companion for those who
            seek the extraordinary in every fleeting moment.
          </p>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <button
              onClick={() =>
                onShowToast(
                  "The full Drolawg story is coming in our next editorial release.",
                )
              }
              className="group relative px-12 py-5 bg-brand-white text-brand-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Explore the Story</span>
              <motion.div
                className="absolute inset-0 bg-brand-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </button>
            <button
              onClick={() =>
                onShowToast("Our digital journal is currently being curated.")
              }
              className="text-sm font-bold uppercase tracking-[0.3em] text-brand-white border-b border-brand-white/20 pb-2 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              View Journal
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-white to-transparent opacity-5" />
      <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-24">
          <span className="text-[10px] uppercase tracking-[1em] text-brand-white/20 vertical-text rotate-180">
            Adventure
          </span>
          <span className="text-[10px] uppercase tracking-[1em] text-brand-white/20 vertical-text rotate-180">
            Precision
          </span>
          <span className="text-[10px] uppercase tracking-[1em] text-brand-white/20 vertical-text rotate-180">
            Legacy
          </span>
        </div>
      </div>
    </section>
  );
}
