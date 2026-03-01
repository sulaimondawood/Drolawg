import React from 'react';
import { motion } from 'motion/react';
import { Shield, Droplets, Zap, Layers } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Swiss Movement',
    description: 'High-frequency automatic movement with 72-hour power reserve.'
  },
  {
    icon: Shield,
    title: 'Sapphire Glass',
    description: 'Double-domed, scratch-resistant crystal with triple AR coating.'
  },
  {
    icon: Droplets,
    title: 'Water Resistant',
    description: 'Tested to 100 meters, suitable for professional marine activity.'
  },
  {
    icon: Layers,
    title: 'Premium Materials',
    description: 'Surgical-grade 316L steel and aerospace titanium alloys.'
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-brand-offwhite px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-center text-brand-black">
                <feature.icon size={32} strokeWidth={1} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-sm text-brand-graphite font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
