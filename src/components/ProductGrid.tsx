import React, { useState } from "react";
import { motion } from "motion/react";
import { type Watch } from "@/src/types";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { WATCHES } from "../data";

interface ProductGridProps {
  onSelectWatch: (watch: Watch) => void;
  onAddToBag: (watch: Watch) => void;
}

export default function ProductGrid({
  onSelectWatch,
  onAddToBag,
}: ProductGridProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedWatches = showAll ? WATCHES : WATCHES.slice(0, 4);

  return (
    <section id="collection" className="py-32 bg-brand-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold block"
            >
              The Collection
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Curated <br /> Excellence.
            </h2>
          </div>
          <p className="text-brand-graphite max-w-md text-lg font-light leading-relaxed">
            Each piece is a unique expression of our design philosophy, blending
            traditional horology with modern aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {displayedWatches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: (index % 2) * 0.2,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
              onClick={() => onSelectWatch(watch)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray rounded-3xl mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-700" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <span className="text-xs font-bold uppercase tracking-widest bg-brand-white text-brand-black px-8 py-4 rounded-full shadow-2xl">
                    Discover {watch.name}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">
                    {watch.collection}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight">
                    {watch.name}
                  </h3>
                  <p className="text-sm text-brand-graphite font-light tracking-wide">
                    {watch.specs.movement}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToBag(watch);
                    }}
                    className="mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-gold hover:text-brand-gold transition-all"
                  >
                    Add to Bag
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-light tracking-tight">
                    {watch.price}
                  </p>
                  <div className="h-[1px] w-0 group-hover:w-full bg-brand-black transition-all duration-500 mt-2 ml-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] group relative overflow-hidden px-8 py-4 rounded-full border border-brand-black/10 hover:border-brand-black transition-all duration-500"
          >
            <span className="relative z-10">
              {showAll ? "Show Less" : "View All Models"}
            </span>
            <ArrowRight
              size={18}
              className={cn(
                "relative z-10 transition-transform duration-500",
                showAll ? "-rotate-90" : "group-hover:translate-x-2",
              )}
            />
            <motion.div
              className="absolute inset-0 bg-brand-black"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
