import React, { useState } from 'react';
import { X, Check, Shield, Truck, PackageCheck, Sparkles } from 'lucide-react';

export default function BuyModal({ isOpen, onClose, onAddToCart, product = null }) {
  if (!isOpen) return null;

  const [hasEngraving, setHasEngraving] = useState(false);
  const [engravingText, setEngravingText] = useState('DHANUSH');
  const [includeAppleCare, setIncludeAppleCare] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const basePrice = product ? parseInt(product.price.replace('$', '')) : 249;
  const appleCarePrice = includeAppleCare ? 29 : 0;
  const totalPrice = basePrice + appleCarePrice;

  const handleCheckout = () => {
    setOrderPlaced(true);
    if (onAddToCart) {
      onAddToCart({
        name: product?.name || 'AirPods Pro (2nd generation)',
        price: totalPrice,
        engraving: hasEngraving ? engravingText : null,
        appleCare: includeAppleCare,
      });
    }
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#1c1c1e] text-white border border-[#333336] rounded-3xl w-full max-w-[650px] max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#1c1c1e]/95 backdrop-blur-md px-6 py-4 border-b border-[#333336] flex items-center justify-between z-10">
          <h3 className="text-[19px] font-bold text-white">
            Buy {product?.name || 'AirPods Pro (2nd generation)'}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product Visual & Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-black/60 p-6 rounded-2xl border border-[#2c2c2e]">
            {/* Visual with Engraving Preview */}
            <div className="relative w-36 h-36 flex items-center justify-center bg-black rounded-xl p-2">
              <img
                src={product?.image || '/assets/case_front.jpg'}
                alt="AirPods Pro Case"
                className="w-full h-full object-contain"
              />
              {hasEngraving && engravingText && (
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 bg-[#333336]/60 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono tracking-widest text-zinc-300 pointer-events-none uppercase">
                  {engravingText}
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <span className="text-[12px] text-[#00ff5f] font-semibold uppercase tracking-wider block mb-1">
                Free Shipping &amp; Free Returns
              </span>
              <h4 className="text-[20px] font-bold text-white mb-1">
                {product?.name || 'AirPods Pro (2nd generation)'}
              </h4>
              <p className="text-[13px] text-[#86868b] mb-3">
                With MagSafe Charging Case (USB-C / Lightning)
              </p>
              <div className="text-[24px] font-extrabold text-white">
                ${basePrice}
              </div>
            </div>
          </div>

          {/* Free Engraving Option */}
          <div className="bg-[#161618] p-5 rounded-2xl border border-[#2c2c2e]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00ff5f]" />
                <span className="text-[15px] font-semibold text-white">
                  Add Free Laser Engraving
                </span>
              </div>
              <input
                type="checkbox"
                id="engravingToggle"
                checked={hasEngraving}
                onChange={(e) => setHasEngraving(e.target.checked)}
                className="w-4 h-4 accent-[#0071e3] rounded cursor-pointer"
              />
            </div>

            {hasEngraving && (
              <div className="mt-3 space-y-2">
                <label className="text-[12px] text-[#86868b] block">
                  Enter your initials, name, or emoji:
                </label>
                <input
                  type="text"
                  maxLength={12}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                  placeholder="NAME OR EMOJI"
                  className="w-full bg-black border border-[#3a3a40] rounded-xl px-4 py-2 text-[14px] font-mono text-white tracking-widest uppercase focus:outline-none focus:border-[#0071e3]"
                />
              </div>
            )}
          </div>

          {/* AppleCare+ Option */}
          <div className="bg-[#161618] p-5 rounded-2xl border border-[#2c2c2e]">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#2997ff] mt-0.5" />
                <div>
                  <span className="text-[15px] font-semibold text-white block">
                    AppleCare+ for Headphones
                  </span>
                  <span className="text-[12px] text-[#86868b] block mt-0.5">
                    Unlimited accidental damage protection, 24/7 priority tech support.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-white">+$29</span>
                <input
                  type="checkbox"
                  checked={includeAppleCare}
                  onChange={(e) => setIncludeAppleCare(e.target.checked)}
                  className="w-4 h-4 accent-[#0071e3] rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="space-y-2 text-[13px] text-[#86868b]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#00ff5f]" />
              <span>Free 2-day delivery. In stock and ready to ship.</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-[#2997ff]" />
              <span>Free pickup today at an Apple Store near you.</span>
            </div>
          </div>

          {/* Order Summary & CTA */}
          <div className="pt-4 border-t border-[#2c2c2e] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[12px] text-[#86868b] block">Total Amount</span>
              <span className="text-[28px] font-bold text-white">${totalPrice}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={orderPlaced}
              className={`w-full sm:w-auto px-8 py-3 rounded-full text-[15px] font-semibold transition-all ${
                orderPlaced
                  ? 'bg-[#30d158] text-black font-bold'
                  : 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg'
              }`}
            >
              {orderPlaced ? '✓ Order Confirmed!' : `Add to Bag • $${totalPrice}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
