import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronRight,
  ShieldCheck,
  Clock,
  Droplets,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { type Watch } from "@/src/types";
import { WATCHES } from "../data";

interface ProductDetailProps {
  watch: Watch | null;
  onClose: () => void;
  onAddToBag: (watch: Watch) => void;
  onSelectWatch: (watch: Watch) => void;
  onShowToast: (msg: string) => void;
}

export default function ProductDetail({
  watch,
  onClose,
  onAddToBag,
  onSelectWatch,
  onShowToast,
}: ProductDetailProps) {
  if (!watch) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={watch.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-brand-white overflow-y-auto"
        // className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-white overflow-y-auto no-scrollbar"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onClose}
          className="fixed top-8 right-8 z-[110] p-4 bg-brand-black text-brand-white rounded-full hover:scale-110 transition-transform shadow-2xl"
        >
          <X size={24} strokeWidth={2} />
        </motion.button>

        <div className="relative w-full min-h-full flex flex-col lg:flex-row">
          {/* Left: Sticky Image Section */}
          <div className="lg:w-1/2 h-[70vh] lg:h-screen lg:sticky lg:top-0 bg-brand-gray flex items-center justify-center p-8 md:p-24 overflow-hidden">
            <motion.div
              key={`img-${watch.id}`}
              initial={{ scale: 1.2, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={watch.image}
                alt={watch.name}
                className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Decorative background text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[20vw] font-bold tracking-tighter uppercase">
                  {watch.name.split(" ")[0]}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:w-1/2 px-6 md:px-24 py-24 lg:py-40 space-y-24">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-brand-gold">
                  {watch.collection}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
                  {watch.name}
                </h1>
              </div>

              <div className="flex items-center gap-8">
                <p className="text-4xl font-light text-brand-black">
                  {watch.price}
                </p>
                <div className="h-8 w-[1px] bg-brand-black/10" />
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className="w-1.5 h-1.5 rounded-full bg-brand-gold"
                    />
                  ))}
                </div>
              </div>

              <p className="text-xl text-brand-graphite font-light leading-relaxed max-w-xl">
                {watch.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onAddToBag(watch)}
                  className="flex-1 py-6 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <ShoppingBag
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  Add to Bag
                </button>
                <button
                  onClick={() =>
                    onShowToast("Store locator is coming soon to your region.")
                  }
                  className="px-10 py-6 border border-brand-black/10 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-black hover:text-brand-white transition-all"
                >
                  Find in Store
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-brand-black/5"
            >
              <div className="space-y-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-white transition-colors duration-500">
                  <Clock size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest">
                    Movement
                  </h4>
                  <p className="text-lg font-bold">{watch.specs.movement}</p>
                  <p className="text-sm text-brand-graphite font-light leading-relaxed">
                    Precision-engineered automatic caliber with hand-finished
                    bridges and 72-hour power reserve.
                  </p>
                </div>
              </div>
              <div className="space-y-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-gray flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-white transition-colors duration-500">
                  <ShieldCheck size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest">
                    Case & Glass
                  </h4>
                  <p className="text-lg font-bold">
                    {watch.specs.case} • {watch.specs.diameter}
                  </p>
                  <p className="text-sm text-brand-graphite font-light leading-relaxed">
                    Sculpted from a single block of aerospace-grade material
                    with double-domed sapphire crystal.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12 pt-24 border-t border-brand-black/5"
            >
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold tracking-tighter">
                  Technical Specs
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Full Details
                </span>
              </div>
              <div className="divide-y divide-brand-black/5">
                {[
                  {
                    label: "Reference",
                    value: `DRL-${watch.id.toUpperCase()}`,
                  },
                  { label: "Movement", value: watch.specs.movement },
                  { label: "Case Material", value: watch.specs.case },
                  { label: "Crystal", value: watch.specs.glass },
                  { label: "Diameter", value: watch.specs.diameter },
                  {
                    label: "Water Resistance",
                    value: watch.specs.waterResistance,
                  },
                  { label: "Power Reserve", value: "72 Hours" },
                  { label: "Strap", value: "Integrated Bracelet / Leather" },
                  { label: "Bezel", value: "Fixed / Unidirectional" },
                  {
                    label: "Functions",
                    value: "Hours, Minutes, Seconds, Date",
                  },
                  { label: "Warranty", value: "5 Year International" },
                ].map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex justify-between items-center py-6 group cursor-default"
                  >
                    <span className="text-sm text-brand-graphite font-medium group-hover:text-brand-black transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold tracking-tight">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12 pt-24 border-t border-brand-black/5"
            >
              <h3 className="text-3xl font-bold tracking-tighter">
                The Art of Precision
              </h3>
              <div className="space-y-8">
                <p className="text-lg text-brand-graphite font-light leading-relaxed">
                  Every {watch.name} is a masterpiece of micro-engineering. Our
                  watchmakers spend over 200 hours hand-assembling and testing
                  each movement to ensure it meets our rigorous standards of
                  accuracy and durability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-brand-gray rounded-3xl space-y-4">
                    <Droplets className="text-brand-gold" size={24} />
                    <h4 className="font-bold">Water Resistance</h4>
                    <p className="text-sm text-brand-graphite font-light">
                      Tested to {watch.specs.waterResistance} in our
                      state-of-the-art pressure chambers, ensuring reliability
                      in any environment.
                    </p>
                  </div>
                  <div className="p-8 bg-brand-gray rounded-3xl space-y-4">
                    <ShieldCheck className="text-brand-gold" size={24} />
                    <h4 className="font-bold">Durability</h4>
                    <p className="text-sm text-brand-graphite font-light">
                      The {watch.specs.case} case provides exceptional scratch
                      resistance and structural integrity for a lifetime of
                      wear.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={watch.lifestyleImage}
                alt="Lifestyle View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-2000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-white text-xs font-bold uppercase tracking-widest">
                  In Context
                </p>
              </div>
            </motion.div>

            <div className="pt-24 space-y-12">
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold tracking-tighter">
                  Related Models
                </h3>
                <button className="text-[10px] font-bold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-1">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WATCHES.filter((w) => w.id !== watch.id)
                  .slice(0, 2)
                  .map((related, i) => (
                    <motion.div
                      key={related.id}
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      whileHover={{ y: -10 }}
                      className="space-y-6 group cursor-pointer bg-brand-gray/30 p-8 rounded-[2rem] transition-all duration-500 hover:bg-brand-gray/50"
                      onClick={() => onSelectWatch(related)}
                    >
                      <div className="aspect-square bg-brand-white rounded-2xl overflow-hidden p-6 relative">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-white px-4 py-2 rounded-full shadow-xl">
                            View Model
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                          {related.collection}
                        </p>
                        <h4 className="font-bold text-xl tracking-tight">
                          {related.name}
                        </h4>
                        <div className="flex justify-between items-center pt-2">
                          <p className="text-lg font-light">{related.price}</p>
                          <ArrowRight
                            size={16}
                            className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
