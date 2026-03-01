import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ArrowRight, CreditCard } from 'lucide-react';
import { type Watch } from '@/src/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { watch: Watch; quantity: number }[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onRemove, onCheckout }: CartDrawerProps) {
  const total = cart.reduce((acc, item) => {
    const price = parseInt(item.watch.price.replace('$', '').replace(',', ''));
    return acc + price * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150] bg-brand-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[160] w-full max-w-md bg-brand-white shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-brand-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} strokeWidth={1.5} />
                <h2 className="text-xl font-bold tracking-tight">Your Bag</h2>
                <span className="text-xs font-bold bg-brand-black text-brand-white px-2 py-0.5 rounded-full">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-brand-gray rounded-full transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-gray rounded-full flex items-center justify-center text-brand-graphite/40">
                    <ShoppingBag size={40} strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold">Your bag is empty</p>
                    <p className="text-sm text-brand-graphite font-light">Explore our collection and find your perfect timepiece.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.watch.id} className="flex gap-6 group">
                    <div className="w-24 h-24 bg-brand-gray rounded-2xl overflow-hidden p-2 flex-shrink-0">
                      <img 
                        src={item.watch.image} 
                        alt={item.watch.name} 
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg leading-tight">{item.watch.name}</h3>
                        <button 
                          onClick={() => onRemove(item.watch.id)}
                          className="text-brand-graphite hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">{item.watch.collection}</p>
                      <div className="flex justify-between items-center pt-2">
                        <p className="text-sm font-medium">Qty: {item.quantity}</p>
                        <p className="font-bold">{item.watch.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-brand-offwhite border-t border-brand-black/5 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-graphite">Subtotal</span>
                    <span className="font-medium">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-graphite">Shipping</span>
                    <span className="text-emerald-600 font-medium uppercase tracking-widest text-[10px]">Complimentary</span>
                  </div>
                  <div className="pt-4 flex justify-between items-end">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold">${total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={onCheckout}
                    className="w-full py-5 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-graphite transition-all shadow-xl"
                  >
                    Checkout
                    <ArrowRight size={18} />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-brand-graphite uppercase tracking-widest font-bold">
                    <CreditCard size={12} />
                    <span>Payment on Delivery</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
