import React from 'react';
import { X, Check } from 'lucide-react';

export default function TechSpecsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const specCategories = [
    {
      title: 'Audio Technology',
      items: [
        'Custom high-excursion Apple driver',
        'Custom high dynamic range amplifier',
        'Active Noise Cancellation',
        'Adaptive Transparency',
        'Vent system for pressure equalization',
        'Personalized Spatial Audio with dynamic head tracking',
        'Adaptive EQ',
      ],
    },
    {
      title: 'Sensors',
      items: [
        'Dual beamforming microphones',
        'Inward-facing microphone',
        'Skin-detect sensor',
        'Motion-detecting accelerometer',
        'Speech-detecting accelerometer',
        'Touch control sensor',
      ],
    },
    {
      title: 'Chip',
      items: [
        'Apple H2 headphone chip',
        'Apple U1 chip in MagSafe Charging Case',
      ],
    },
    {
      title: 'Controls',
      items: [
        'Press once to play, pause, or answer a phone call',
        'Press twice to skip forward',
        'Press three times to skip back',
        'Press and hold to switch between Active Noise Cancellation and Adaptive Transparency',
        'Swipe up or down to adjust volume',
      ],
    },
    {
      title: 'Sweat and Water Resistance',
      items: [
        'Sweat and water resistant (IPX4): AirPods Pro and charging case',
      ],
    },
    {
      title: 'Size and Weight (Each)',
      items: [
        'Height: 1.22 inches (30.9 mm)',
        'Width: 0.86 inch (21.8 mm)',
        'Depth: 0.94 inch (24.0 mm)',
        'Weight: 0.19 ounce (5.3 grams)',
      ],
    },
    {
      title: 'Charging Case',
      items: [
        'Works with MagSafe charger, Apple Watch charger, Qi-certified chargers, or Lightning / USB-C connector',
        'Built-in speaker for Find My alerts',
        'Lanyard loop attachment point',
      ],
    },
    {
      title: 'Battery',
      items: [
        'Up to 6 hours of listening time with a single charge (up to 5.5 hours with Spatial Audio and Head Tracking enabled)',
        'Up to 4.5 hours of talk time with a single charge',
        'Up to 30 hours of listening time with MagSafe Charging Case',
        '5 minutes in the case provides around 1 hour of listening time or 1 hour of talk time',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#1c1c1e] text-white border border-[#333336] rounded-3xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#1c1c1e]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#333336] flex items-center justify-between z-10">
          <div>
            <h3 className="text-[20px] font-bold text-white">AirPods Pro (2nd generation)</h3>
            <p className="text-[13px] text-[#86868b]">Technical Specifications</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Specs List */}
        <div className="p-6 sm:p-8 space-y-8 divide-y divide-[#2c2c2e]">
          {specCategories.map((cat, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
              <h4 className="text-[17px] font-semibold text-[#00ff5f] mb-3">
                {cat.title}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] text-[#d1d1d6]">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-[#86868b] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* In the Box Footer Banner */}
        <div className="bg-[#161618] p-6 sm:p-8 border-t border-[#333336] text-center">
          <h4 className="text-[15px] font-semibold text-white mb-2">In the Box</h4>
          <p className="text-[13px] text-[#86868b] max-w-[600px] mx-auto">
            AirPods Pro, MagSafe Charging Case with speaker and lanyard loop, Silicone ear tips (four sizes: XS, S, M, L), Lightning to USB-C Cable, Documentation
          </p>
        </div>
      </div>
    </div>
  );
}
