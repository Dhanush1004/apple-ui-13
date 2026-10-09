import React, { useState } from 'react';
import { Cpu, Radio, Activity, Zap } from 'lucide-react';

export default function AudioPerformance() {
  const [activeTab, setActiveTab] = useState('driver'); // 'driver' | 'inward-mic' | 'h2'

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Audio Performance
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            H2. More immersive by every measure.
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            The new Apple-designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom-built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition — so every sound is more vivid than ever.
          </p>
        </div>

        {/* H2 Chip Spotlight Card */}
        <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 sm:p-12 mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="w-[180px] sm:w-[220px] aspect-square rounded-2xl overflow-hidden border border-[#3a3a40] shadow-2xl bg-black">
                <img
                  src="/assets/h2_chip.jpg"
                  alt="Apple H2 Silicon Chip"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#1d1d1f] border border-[#00ff5f]/40 px-3 py-1 rounded-full text-[11px] font-semibold text-[#00ff5f] flex items-center gap-1.5 shadow-lg">
                <Zap className="w-3 h-3 text-[#00ff5f]" />
                H2 Silicon
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-white">
              Computationally tuned audio at the speed of sound.
            </h3>
            <p className="text-[#86868b] text-[16px] sm:text-[17px] leading-relaxed">
              The chip uses powerful new <span className="text-white font-medium">adaptation algorithms</span> to process sound more quickly, tuning audio at the precise moment you hear it. Every detail is rendered for your specific ear shape, immersing you in higher-fidelity sound.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[#00ff5f] text-[14px] font-medium">
              <Activity className="w-4 h-4" />
              <span>Real-time adaptive equalization and distortion correction</span>
            </div>
          </div>
        </div>

        {/* Acoustic Architecture & Custom Driver Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase with Switcher */}
          <div className="lg:col-span-7 bg-[#111113] border border-[#262629] rounded-3xl p-6 sm:p-8">
            {/* View Mode Tabs */}
            <div className="flex space-x-2 mb-6 bg-black/60 p-1.5 rounded-xl border border-[#262629] w-fit">
              <button
                onClick={() => setActiveTab('driver')}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                  activeTab === 'driver'
                    ? 'bg-[#2c2c2e] text-white shadow'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Acoustic Driver
              </button>
              <button
                onClick={() => setActiveTab('inward-mic')}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                  activeTab === 'inward-mic'
                    ? 'bg-[#2c2c2e] text-white shadow'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Inward-Facing Mic
              </button>
              <button
                onClick={() => setActiveTab('exploded')}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                  activeTab === 'exploded'
                    ? 'bg-[#2c2c2e] text-white shadow'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Internal Architecture
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-[#1f1f22]">
              {activeTab === 'driver' && (
                <img
                  src="/assets/audio_airpod.jpg"
                  alt="Custom Apple driver and amplifier in AirPods Pro"
                  className="w-full h-full object-contain p-4 animate-in fade-in duration-300"
                />
              )}
              {activeTab === 'inward-mic' && (
                <img
                  src="/assets/audio_guts_top.jpg"
                  alt="Redesigned inward facing microphone"
                  className="w-full h-full object-contain p-4 animate-in fade-in duration-300"
                />
              )}
              {activeTab === 'exploded' && (
                <img
                  src="/assets/audio_guts_bottom.jpg"
                  alt="Exploded view of AirPods Pro acoustic components"
                  className="w-full h-full object-contain p-4 animate-in fade-in duration-300"
                />
              )}
            </div>
          </div>

          {/* Callout Explanations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l-2 border-[#00ff5f] pl-6 py-2">
              <h4 className="text-[20px] font-semibold text-white mb-2">
                Custom low-distortion driver
              </h4>
              <p className="text-[#86868b] text-[15px] sm:text-[16px] leading-relaxed">
                A custom-built driver and amplifier work with the H2 chip to provide lower distortion during playback, so you'll hear deeper bass and crisper highs — across all volume levels.
              </p>
            </div>

            <div className="border-l-2 border-[#2997ff] pl-6 py-2">
              <h4 className="text-[20px] font-semibold text-white mb-2">
                Inward-facing microphone
              </h4>
              <p className="text-[#86868b] text-[15px] sm:text-[16px] leading-relaxed">
                A redesigned inward-facing microphone works with voice enhancement algorithms to better recognize and articulate your voice, so it sounds more natural when you're on phone and video calls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
