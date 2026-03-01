import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export default function Footer({ onShowToast }: FooterProps) {
  return (
    <footer className="bg-brand-white pt-32 pb-12 px-6 md:px-12 border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tighter">DROLAWG</a>
            <p className="text-sm text-brand-graphite font-light leading-relaxed max-w-xs">
              Defining the future of horology through minimal design and uncompromising precision.
            </p>
            <div className="flex items-center gap-6">
              <button onClick={() => onShowToast('Instagram integration is coming soon.')} className="hover:text-brand-gold transition-colors"><Instagram size={20} strokeWidth={1.5} /></button>
              <button onClick={() => onShowToast('Twitter integration is coming soon.')} className="hover:text-brand-gold transition-colors"><Twitter size={20} strokeWidth={1.5} /></button>
              <button onClick={() => onShowToast('Facebook integration is coming soon.')} className="hover:text-brand-gold transition-colors"><Facebook size={20} strokeWidth={1.5} /></button>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest">Collection</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onShowToast('Collection filtering is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Origin Series</button></li>
              <li><button onClick={() => onShowToast('Collection filtering is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Ethereal Collection</button></li>
              <li><button onClick={() => onShowToast('Collection filtering is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Prestige Line</button></li>
              <li><button onClick={() => onShowToast('Collection filtering is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Marine Series</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onShowToast('Our story is being written.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Our Story</button></li>
              <li><button onClick={() => onShowToast('Craftsmanship details are being curated.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Craftsmanship</button></li>
              <li><button onClick={() => onShowToast('Sustainability report is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Sustainability</button></li>
              <li><button onClick={() => onShowToast('Journal is coming soon.')} className="text-sm text-brand-graphite hover:text-brand-black transition-colors">Journal</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-brand-graphite font-light">Join our inner circle for exclusive updates and early access.</p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                onShowToast('Thank you for joining our inner circle.');
              }}
              className="relative"
            >
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-brand-black/20 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors pr-10"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-brand-gold transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-brand-graphite font-medium">
            © 2026 DROLAWG. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-graphite hover:text-brand-black transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-graphite hover:text-brand-black transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-graphite hover:text-brand-black transition-colors font-medium">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
