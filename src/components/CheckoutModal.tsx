import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Truck, ShieldCheck, MapPin } from "lucide-react";
import { type Watch } from "@/src/types";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { watch: Watch; quantity: number }[];
  onOrderComplete: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onOrderComplete,
}: CheckoutModalProps) {
  const [step, setStep] = useState<"details" | "success">("details");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const total = cart.reduce((acc, item) => {
    const price = parseInt(item.watch.price.replace("$", "").replace(",", ""));
    return acc + price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setStep("success");
    setTimeout(() => {
      onOrderComplete();
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-black/60 backdrop-blur-md p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-4xl bg-brand-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {step === "details" ? (
              <>
                <div className="flex-1 p-8 md:p-12 overflow-y-auto no-scrollbar">
                  <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter">
                      Delivery Details
                    </h2>
                    <button onClick={onClose} className="md:hidden">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-brand-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-brand-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-brand-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                        Shipping Address
                      </label>
                      <textarea
                        required
                        rows={3}
                        className="w-full bg-brand-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all resize-none"
                        placeholder="Street address, apartment, suite..."
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                          City
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-brand-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold transition-all"
                          placeholder="New York"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                          Payment Method
                        </label>
                        <div className="w-full bg-brand-black text-brand-white rounded-2xl px-6 py-4 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                            Payment on Delivery
                          </span>
                          <CheckCircle2 size={18} className="text-brand-gold" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-6 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-gold transition-all shadow-2xl mt-8"
                    >
                      Confirm Order • ${total.toLocaleString()}
                    </button>
                  </form>
                </div>

                <div className="w-full md:w-80 bg-brand-offwhite p-8 md:p-12 border-l border-brand-black/5 flex flex-col">
                  <div className="hidden md:flex justify-end mb-8">
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-brand-gray rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="flex-1 space-y-8">
                    <h3 className="text-xl font-bold tracking-tight">
                      Summary
                    </h3>
                    <div className="space-y-4 max-h-60 overflow-y-auto no-scrollbar pr-2">
                      {cart.map((item) => (
                        <div key={item.watch.id} className="flex gap-4">
                          <div className="w-12 h-12 bg-brand-gray rounded-lg flex-shrink-0 p-1">
                            <img
                              src={item.watch.image}
                              alt={item.watch.name}
                              className="w-full h-full object-contain mix-blend-multiply"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold leading-tight">
                              {item.watch.name}
                            </p>
                            <p className="text-[10px] text-brand-graphite">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="text-xs font-bold">
                            {item.watch.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-brand-black/5 space-y-4">
                    <div className="flex items-center gap-3 text-brand-graphite">
                      <Truck size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Express Delivery
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-graphite">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        2-Year Warranty
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full p-12 md:p-24 text-center space-y-8 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8"
                >
                  <CheckCircle2 size={64} strokeWidth={1.5} />
                </motion.div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Order Placed.
                  </h2>
                  <p className="text-xl text-brand-graphite font-light max-w-md mx-auto">
                    Thank you, {formData.name}. Your timepiece is being prepared
                    for delivery to {formData.city}.
                  </p>
                </div>
                <div className="pt-8 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs">
                    <MapPin size={14} />
                    <span>
                      Track Order: #DRL-{Math.floor(Math.random() * 1000000)}
                    </span>
                  </div>
                  <p className="text-xs text-brand-graphite">
                    You will receive a confirmation email shortly.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-8 sm:px-12 py-4 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs mt-12"
                >
                  Return to Home
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
