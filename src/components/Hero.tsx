import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Watch Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Darker, more sophisticated overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
          <div className="absolute inset-0 bg-brand-black/20" />
        </motion.div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
              The New Standard of Time
            </span>
          </motion.div>

          <h1 className="text-6xl min-[320px]:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-brand-white">
            Timeless <br />{" "}
            <span className="text-brand-gold italic font-serif font-normal">
              Precision.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-silver/80 max-w-xl font-light leading-relaxed">
            Crafted with surgical-grade materials and Swiss-engineered
            movements. A legacy of excellence on your wrist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 pt-12">
            <button
              onClick={scrollToCollection}
              className="w-full sm:w-auto px-12 py-5 bg-brand-white text-brand-black rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              Shop Collection
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("craftsmanship")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-12 py-5 bg-transparent text-brand-white border border-brand-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-500"
            >
              Explore Craftsmanship
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-12 left-12 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToCollection}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold/60 [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
