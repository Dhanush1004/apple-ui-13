import React, { useState } from 'react';
import { BatteryCharging, Search, Volume2, ShieldCheck, Disc3 } from 'lucide-react';

export default function ChargingCase() {
  const [selectedAngle, setSelectedAngle] = useState('magsafe'); // 'magsafe' | 'front' | 'closed' | 'bottom' | 'side'

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Case and Battery Life
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            A case of unmistakable{' '}
            <span className="text-[#00ff5f] drop-shadow-[0_0_25px_rgba(0,255,95,0.4)]">
              power.
            </span>
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            The new MagSafe Charging Case is packed with features that make listening on the move especially convenient. An updated design offers more ways to keep track of the case, and extended battery life lets you listen, watch, and talk longer between charges. You won't find a more capable case.
          </p>
        </div>

        {/* Battery Life Highlighting Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <span className="text-[#86868b] text-[15px] font-semibold uppercase tracking-wider block mb-2">
              Single Charge
            </span>
            <div className="my-4">
              <span className="text-[64px] sm:text-[76px] font-extrabold text-white leading-none tracking-tight block">
                6 hrs
              </span>
              <span className="text-[#86868b] text-[16px] font-medium">
                of listening time with Active Noise Cancellation enabled.<sup>2</sup>
              </span>
            </div>
            <div className="text-[13px] text-[#00ff5f] flex items-center gap-1.5 pt-2">
              <BatteryCharging className="w-4 h-4" />
              <span>33% more listening time than the first generation</span>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00ff5f]/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[#86868b] text-[15px] font-semibold uppercase tracking-wider block mb-2">
              With MagSafe Charging Case
            </span>
            <div className="my-4">
              <span className="text-[64px] sm:text-[76px] font-extrabold text-[#00ff5f] leading-none tracking-tight block">
                30 hrs
              </span>
              <span className="text-[#86868b] text-[16px] font-medium">
                of total listening time with Active Noise Cancellation enabled, using the case.<sup>3</sup>
              </span>
            </div>
            <div className="text-[13px] text-white/90 flex items-center gap-1.5 pt-2">
              <Disc3 className="w-4 h-4 text-[#00ff5f]" />
              <span>Recharge with an Apple Watch charger, MagSafe, or Lightning/USB-C</span>
            </div>
          </div>
        </div>

        {/* Multi-angle Interactive Case Showcase */}
        <div className="bg-[#111113] border border-[#262629] rounded-3xl p-6 sm:p-12 mb-16">
          {/* Angle Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-black/60 p-1.5 rounded-2xl border border-[#262629] max-w-fit mx-auto">
            {[
              { id: 'magsafe', label: 'MagSafe Wireless' },
              { id: 'front', label: 'Front LED' },
              { id: 'closed', label: 'Top Lid' },
              { id: 'bottom', label: 'Speaker & Port' },
              { id: 'side', label: 'Lanyard Loop' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedAngle(btn.id)}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all ${
                  selectedAngle === btn.id
                    ? 'bg-[#2c2c2e] text-white shadow-md'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Interactive Case Visualizer */}
          <div className="relative aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-[#1f1f22]">
            {selectedAngle === 'magsafe' && (
              <img
                src="/assets/battery_magsafe.jpg"
                alt="MagSafe Charging Case charging on Apple Watch puck"
                className="w-full h-full object-contain p-6 animate-in fade-in duration-300"
              />
            )}
            {selectedAngle === 'front' && (
              <img
                src="/assets/case_front.jpg"
                alt="MagSafe Case front view with status LED"
                className="w-full h-full object-contain p-6 animate-in fade-in duration-300"
              />
            )}
            {selectedAngle === 'closed' && (
              <img
                src="/assets/case_closed.jpg"
                alt="MagSafe Case top angle view"
                className="w-full h-full object-contain p-6 animate-in fade-in duration-300"
              />
            )}
            {selectedAngle === 'bottom' && (
              <img
                src="/assets/case_bottom.jpg"
                alt="MagSafe Case bottom with built-in speaker and connector"
                className="w-full h-full object-contain p-6 animate-in fade-in duration-300"
              />
            )}
            {selectedAngle === 'side' && (
              <img
                src="/assets/case_side.jpg"
                alt="MagSafe Case side showing lanyard loop connection"
                className="w-full h-full object-contain p-6 animate-in fade-in duration-300"
              />
            )}
          </div>
        </div>

        {/* 4 Feature Deep Dives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#1e1e24] flex items-center justify-center text-[#2997ff] mb-4">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-2">
                Precision Finding
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                A U1 chip enables Find My with Precision Finding for your case, so you can locate it with pinpoint accuracy.
              </p>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#1e1e24] flex items-center justify-center text-[#00ff5f] mb-4">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-2">
                Built-in Speaker
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                The built-in speaker plays sound to help you easily locate your case, and emits chimes when pairing or battery is low.
              </p>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#1e1e24] flex items-center justify-center text-purple-400 mb-4">
              <Disc3 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-2">
                Lanyard Loop
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                Attach the case to a backpack or handbag, so immersive, noise-cancelling sound is always within reach.
              </p>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#1e1e24] flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-2">
                IPX4 Resistant
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                Both AirPods Pro and the MagSafe Charging Case are sweat and water resistant for workouts and unpredictable weather.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
