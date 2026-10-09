import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';

export default function Hero({ onOpenBuy }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section id="overview" className="relative bg-black pt-16 pb-24 overflow-hidden border-b border-[#222225]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/0 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1024px] mx-auto px-4 text-center">
        {/* Subtle Brand Title */}
        <h2 className="text-[#86868b] text-[21px] md:text-[24px] font-semibold tracking-[-0.01em] mb-2 animate-in fade-in duration-700">
          AirPods Pro
        </h2>

        {/* Hero Title */}
        <h1 className="text-white text-[48px] sm:text-[68px] md:text-[84px] font-bold tracking-[-0.03em] leading-[1.05] max-w-[850px] mx-auto mb-6">
          Rebuilt from the sound up.
        </h1>

        {/* Intro Copy matching Apple's exact typography */}
        <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium max-w-[760px] mx-auto mb-12">
          AirPods Pro have been re-engineered for even richer audio experiences. Next-level Active Noise Cancellation and Adaptive Transparency reduce more external noise. Spatial Audio takes immersion to a remarkably personal level. Touch control now lets you adjust volume with a swipe. And a leap in power delivers 6 hours of battery life from a single charge.<sup>1</sup>
        </p>

        {/* Interactive sound experience trigger */}
        <div className="inline-flex items-center gap-3 bg-[#1d1d1f]/90 border border-[#333336] rounded-full px-5 py-2 mb-12 backdrop-blur-md shadow-lg transition-all hover:border-[#55555c]">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="flex items-center gap-2.5 text-[14px] text-white font-medium hover:text-[#2997ff] transition-colors"
            type="button"
          >
            {isPlayingAudio ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff5f] animate-ping" />
                <Volume2 className="w-4 h-4 text-[#00ff5f]" />
                <span>Simulating 3D Spatial Audio Dome</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-[#2997ff]" />
                <span>Experience Spatial Sound Field</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Visual Container */}
        <div className="relative max-w-[920px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#222225] bg-[#050505]">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
            <img
              src="/assets/hero_listening.jpg"
              alt="Person listening to AirPods Pro in immersive Spatial Audio sound sphere"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlayingAudio ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Sound Wave Halo Overlay Animation */}
            {isPlayingAudio && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full border border-[#00ff5f]/40 animate-ping duration-1000" />
                <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-[#2997ff]/50 animate-pulse" />
                <div className="absolute w-[180px] sm:w-[260px] h-[180px] sm:h-[260px] rounded-full border border-purple-500/40 animate-ping duration-700" />
              </div>
            )}
          </div>

          {/* Bottom Banner Details inside hero frame */}
          <div className="p-6 sm:p-8 bg-gradient-to-t from-black via-[#0a0a0c] to-transparent flex flex-wrap items-center justify-around gap-6 border-t border-[#1d1d1f]">
            <div className="text-center">
              <span className="block text-[28px] sm:text-[34px] font-bold text-white tracking-tight">H2</span>
              <span className="text-[13px] text-[#86868b]">Apple silicon chip</span>
            </div>
            <div className="text-center">
              <span className="block text-[28px] sm:text-[34px] font-bold text-[#00ff5f] tracking-tight">2x</span>
              <span className="text-[13px] text-[#86868b]">More Noise Cancellation</span>
            </div>
            <div className="text-center">
              <span className="block text-[28px] sm:text-[34px] font-bold text-white tracking-tight">6 hrs</span>
              <span className="text-[13px] text-[#86868b]">Single charge listening</span>
            </div>
            <div className="text-center">
              <span className="block text-[28px] sm:text-[34px] font-bold text-white tracking-tight">30 hrs</span>
              <span className="text-[13px] text-[#86868b]">With MagSafe Case</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
