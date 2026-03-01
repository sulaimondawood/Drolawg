import React from 'react';
import { motion } from 'motion/react';

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-32 bg-brand-black text-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">The Art of Making</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Precision in <br /> Every Micron.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-xl text-brand-silver font-light leading-relaxed max-w-xl">
                Our master watchmakers spend hundreds of hours hand-finishing every component. From the mirror-polished bevels to the intricate perlage on the baseplate, no detail is too small.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold tracking-tight">300+</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-silver">Individual Parts</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold tracking-tight">0.01mm</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-silver">Tolerance Level</p>
                </div>
              </div>

              <button className="text-sm font-bold uppercase tracking-widest border-b border-brand-white pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors">
                Discover Our Movement
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop"
              alt="Watch Movement Detail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
