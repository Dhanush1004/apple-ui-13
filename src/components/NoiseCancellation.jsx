import React, { useState } from 'react';
import { Shield, Sparkles, Check, SlidersHorizontal, VolumeX, Radio } from 'lucide-react';

export default function NoiseCancellation() {
  const [selectedTip, setSelectedTip] = useState('all'); // 'all' | 'xs' | 's' | 'm'
  const [ancMode, setAncMode] = useState('anc'); // 'anc' | 'transparency' | 'off'

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Noise Cancellation
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            A marvel of modern silence.
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            Featuring up to two times more noise cancellation than their predecessor, the H2-powered AirPods Pro are built to let you listen in peace. With control over what you hear — and don't hear — you'll be immersed in songs and podcasts like never before.
          </p>
        </div>

        {/* Interactive Noise Cancellation Particle Ring Visual */}
        <div className="relative rounded-3xl overflow-hidden bg-[#070708] border border-[#262629] mb-20 p-6 sm:p-12 text-center">
          {/* Mode Switcher */}
          <div className="inline-flex bg-[#161618] p-1.5 rounded-full border border-[#333336] mb-8">
            <button
              onClick={() => setAncMode('anc')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                ancMode === 'anc'
                  ? 'bg-[#2997ff] text-white shadow-lg'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Active Noise Cancellation (2x)
            </button>
            <button
              onClick={() => setAncMode('transparency')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                ancMode === 'transparency'
                  ? 'bg-[#30d158] text-black font-semibold shadow-lg'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Adaptive Transparency
            </button>
            <button
              onClick={() => setAncMode('off')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                ancMode === 'off'
                  ? 'bg-[#2c2c2e] text-white shadow-lg'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Off
            </button>
          </div>

          {/* Particle Image */}
          <div className="relative max-w-[750px] mx-auto aspect-[16/10] rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
            <img
              src="/assets/noise_cancel_particle.jpg"
              alt="Acoustic anti-noise particle ring vortex canceling ambient sound"
              className={`w-full h-full object-cover transition-all duration-700 ${
                ancMode === 'anc' ? 'scale-105 brightness-110 filter' :
                ancMode === 'transparency' ? 'hue-rotate-60' : 'opacity-40 grayscale'
              }`}
            />

            {/* Status Indicator Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-[#3a3a40] px-5 py-2 rounded-full text-[13px] text-white flex items-center gap-2.5">
              {ancMode === 'anc' && (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-ping" />
                  <span>2x External Noise Reduction Active</span>
                </>
              )}
              {ancMode === 'transparency' && (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                  <span>Reducing harsh sirens & loud noise 48,000x/sec</span>
                </>
              )}
              {ancMode === 'off' && (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#86868b]" />
                  <span>Passive Acoustic Seal Only</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Acoustic Vent & Silicone Ear Tips Dual Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Acoustic Vent Card */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6 flex items-center justify-center">
              <img
                src="/assets/noise_cancel_airpod.jpg"
                alt="AirPods Pro rear acoustic vent and noise-cancelling microphone"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Acoustic vents and microphones
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Noise-cancelling microphones and a rear vent are optimally placed to quickly detect sound coming in, working together to counter noise before it reaches your ear.
              </p>
            </div>
          </div>

          {/* Silicone Ear Tips Card */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              {/* Tip Selection Buttons */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider">
                  Four Sizes Included
                </span>
                <div className="flex space-x-1.5">
                  {['all', 'xs', 's', 'm'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTip(t)}
                      className={`w-7 h-7 rounded-full text-[11px] font-bold uppercase transition-all ${
                        selectedTip === t
                          ? 'bg-white text-black'
                          : 'bg-[#222225] text-[#86868b] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tip Stage View */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6 flex items-center justify-center p-4">
                {selectedTip === 'all' && (
                  <img
                    src="/assets/airpod_tips.jpg"
                    alt="Four silicone tip sizes XS, S, M, L"
                    className="w-full h-full object-contain animate-in fade-in"
                  />
                )}
                {selectedTip === 'xs' && (
                  <img
                    src="/assets/airpod_tips_xs.jpg"
                    alt="Extra small silicone tip"
                    className="w-full h-full object-contain animate-in fade-in"
                  />
                )}
                {selectedTip === 's' && (
                  <img
                    src="/assets/airpod_tips_s.jpg"
                    alt="Small silicone tip"
                    className="w-full h-full object-contain animate-in fade-in"
                  />
                )}
                {selectedTip === 'm' && (
                  <img
                    src="/assets/airpod_tips_m.jpg"
                    alt="Medium silicone tip"
                    className="w-full h-full object-contain animate-in fade-in"
                  />
                )}
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Now with an extra small tip.
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Four pairs of silicone tips are now included to fit a wider range of ears. The tips create an acoustic seal that closes in the sound — and secure AirPods Pro in place.
              </p>
            </div>
          </div>
        </div>

        {/* Adaptive Transparency Stat Highlight */}
        <div className="bg-gradient-to-r from-[#121b14] via-[#111113] to-[#121b14] border border-[#24422b]/50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#30d158] font-bold text-[14px] uppercase tracking-wider block mb-2">
              Adaptive Transparency
            </span>
            <h4 className="text-[26px] sm:text-[32px] font-bold text-white mb-3 max-w-[550px]">
              Tones down harsh noise from sirens and tools.
            </h4>
            <p className="text-[#86868b] text-[15px] max-w-[520px]">
              Adaptive Transparency harnesses the power of H2 to minimize the intensity of loud noises like sirens or power tools — so you can comfortably hear the world around you.
            </p>
          </div>
          <div className="text-center md:text-right min-w-[200px]">
            <div className="text-[44px] sm:text-[56px] font-extrabold text-[#30d158] leading-none mb-1">
              48,000
            </div>
            <div className="text-[14px] font-medium text-white/90">
              times per second
            </div>
            <div className="text-[12px] text-[#86868b]">
              noise reduction rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
