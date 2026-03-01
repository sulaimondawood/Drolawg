import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Craftsmanship from "./components/Craftsmanship";
import Features from "./components/Features";
import Lifestyle from "./components/Lifestyle";
import ProductDetail from "./components/ProductDetail";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import SearchOverlay from "./components/SearchOverlay";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { type Watch } from "./types";

export default function App() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cart, setCart] = useState<{ watch: Watch; quantity: number }[]>([]);
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
    message: "",
    isVisible: false,
  });

  useEffect(() => {
    //  initial load for premium feel
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedWatch || isCartOpen || isCheckoutOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedWatch, isCartOpen, isCheckoutOpen, isSearchOpen]);

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const addToBag = (watch: Watch) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.watch.id === watch.id);
      if (existing) {
        return prev.map((item) =>
          item.watch.id === watch.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { watch, quantity: 1 }];
    });
    setSelectedWatch(null);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.watch.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-brand-white flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-3xl font-bold tracking-tighter">
                DROLAWG
              </span>
              <div className="w-12 h-[1px] bg-brand-black/20 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-brand-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        <Hero />
        <ProductGrid onSelectWatch={setSelectedWatch} onAddToBag={addToBag} />
        <Craftsmanship />
        <Features />
        <Lifestyle onShowToast={showToast} />
        <Footer onShowToast={showToast} />
      </main>

      <ProductDetail
        watch={selectedWatch}
        onClose={() => setSelectedWatch(null)}
        onAddToBag={addToBag}
        onSelectWatch={setSelectedWatch}
        onShowToast={showToast}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderComplete={() => {
          setCart([]);
          setIsCheckoutOpen(false);
          showToast("Order confirmed. Thank you for your purchase.");
        }}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectWatch={setSelectedWatch}
      />

      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
}
