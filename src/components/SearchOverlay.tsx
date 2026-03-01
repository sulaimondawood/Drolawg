import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight } from "lucide-react";
import { WATCHES } from "../data";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWatch: (watch: any) => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
  onSelectWatch,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const filteredWatches = WATCHES.filter(
    (w) =>
      w.name.toLowerCase().includes(query.toLowerCase()) ||
      w.collection.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-brand-white flex flex-col"
        >
          <div className="p-8 flex justify-end">
            <button
              onClick={onClose}
              className="p-4 hover:bg-brand-gray rounded-full transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          <div className="overflow-y-auto h-full flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-12">
            <div className="relative">
              <Search
                size={40}
                strokeWidth={1}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-black/20"
              />
              <input
                autoFocus
                type="text"
                placeholder="Search models, collections..."
                className="w-full bg-transparent border-b-2 border-brand-black/10 py-8 pl-16 text-2xl min-[500px]:text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter focus:outline-none focus:border-brand-black transition-colors"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                {query ? "Search Results" : "Suggested Models"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(query ? filteredWatches : WATCHES.slice(0, 4)).map(
                  (watch) => (
                    <motion.div
                      layout
                      key={watch.id}
                      onClick={() => {
                        onSelectWatch(watch);
                        onClose();
                      }}
                      className="group flex items-center gap-6 p-6 bg-brand-gray rounded-3xl cursor-pointer hover:bg-brand-black hover:text-brand-white transition-all duration-500"
                    >
                      <div className="w-20 h-20 bg-white rounded-2xl p-2 flex-shrink-0">
                        <img
                          src={watch.image}
                          alt={watch.name}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                          {watch.collection}
                        </p>
                        <h4 className="text-xl font-bold tracking-tight">
                          {watch.name}
                        </h4>
                      </div>
                      <ArrowRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"
                      />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
