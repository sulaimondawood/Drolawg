import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
          isScrolled
            ? "py-4 bg-brand-white/80 backdrop-blur-md border-b border-brand-black/5"
            : "py-8 bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("collection")}
              className={cn(
                "text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-all",
                isScrolled ? "text-brand-black" : "text-brand-white",
              )}
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection("craftsmanship")}
              className={cn(
                "text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-all",
                isScrolled ? "text-brand-black" : "text-brand-white",
              )}
            >
              Craftsmanship
            </button>
            <button
              onClick={() => scrollToSection("lifestyle")}
              className={cn(
                "text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-all",
                isScrolled ? "text-brand-black" : "text-brand-white",
              )}
            >
              Lifestyle
            </button>
          </div>

          <a
            href="/"
            className={cn(
              "text-2xl font-bold tracking-tighter flex items-center gap-1 transition-colors",
              isScrolled ? "text-brand-black" : "text-brand-white",
            )}
          >
            DROLAWG
          </a>

          <div
            className={cn(
              "flex-1 flex items-center justify-end gap-6",
              isScrolled ? "text-brand-black" : "text-brand-white",
            )}
          >
            <button
              onClick={onOpenSearch}
              className="hover:opacity-50 transition-opacity"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={onOpenCart}
              className="hover:opacity-50 transition-opacity relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold text-brand-white text-[8px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden hover:opacity-50 transition-opacity"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-white px-6 py-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold tracking-tighter">
                DROLAWG
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <button
                onClick={() => scrollToSection("collection")}
                className="text-left text-4xl font-light tracking-tight"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection("craftsmanship")}
                className="text-left text-4xl font-light tracking-tight"
              >
                Craftsmanship
              </button>
              <button
                onClick={() => scrollToSection("lifestyle")}
                className="text-left text-4xl font-light tracking-tight"
              >
                Lifestyle
              </button>
            </div>
            <div className="mt-auto pt-8 border-t border-brand-black/10">
              <p className="text-sm text-brand-graphite mb-4">
                Experience precision.
              </p>
              <button
                onClick={() => scrollToSection("collection")}
                className="w-full py-4 bg-brand-black text-brand-white rounded-full font-medium"
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
