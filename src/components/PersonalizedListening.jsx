import React, { useState } from 'react';
import { Compass, ScanFace, Radio, Sparkles } from 'lucide-react';

export default function PersonalizedListening() {
  const [headAngle, setHeadAngle] = useState(0);

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Personalized Listening
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            Sound. Tuned to you.
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            AirPods Pro take the listening experience to a new level of individuality. Personalized Spatial Audio with dynamic head tracking works with all your devices to immerse you deeper in sound all around you. And Adaptive EQ accounts for the fit of AirPods Pro, so you hear every frequency just as it was intended.
          </p>
        </div>

        {/* Dynamic Head Tracking Showcase */}
        <div className="bg-[#111113] border border-[#262629] rounded-3xl p-6 sm:p-12 mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black mb-8 border border-[#1f1f22] flex items-center justify-center">
            <img
              src="/assets/spatial_audio.jpg"
              alt="Personalized Spatial Audio with dynamic head tracking"
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: `rotate(${headAngle * 0.15}deg) scale(${1 + Math.abs(headAngle) * 0.002})` }}
            />

            {/* Interactive Head Tracking Simulation Overlay */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-[#333336] px-4 py-2 rounded-full text-[12px] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#2997ff]" />
              <span>Head Tracker Angle: {headAngle}°</span>
            </div>
          </div>

          {/* Head Angle Control Slider */}
          <div className="max-w-[500px] mx-auto text-center space-y-2 mb-4">
            <label className="text-[13px] text-[#86868b] block font-medium">
              Simulate Dynamic Head Tracking
            </label>
            <input
              type="range"
              min="-45"
              max="45"
              value={headAngle}
              onChange={(e) => setHeadAngle(Number(e.target.value))}
              className="w-full accent-[#2997ff] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#86868b]">
              <span>Turn Left (-45°)</span>
              <span>Center (0°)</span>
              <span>Turn Right (+45°)</span>
            </div>
          </div>
        </div>

        {/* Dual Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#1e1e24] flex items-center justify-center mb-6 text-[#2997ff]">
              <ScanFace className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-3">
                TrueDepth camera ear profiling
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                To play sound that better suits your unique ear shape, Personalized Spatial Audio works with the TrueDepth camera on your iPhone to create a custom profile based on your head's geometry. The profile syncs across your devices — delivering phenomenal sound every way you listen.
              </p>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#1e1e24] flex items-center justify-center mb-6 text-[#00ff5f]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-3">
                Adaptive EQ
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Adaptive EQ tunes music to your ears in real time based on the fit of AirPods Pro. Inward-facing microphones measure what you're hearing, then adjust low and mid-range frequencies of a song so you get consistently detailed playback, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
