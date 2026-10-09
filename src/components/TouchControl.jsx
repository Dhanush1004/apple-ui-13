import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Play, Pause, SkipForward, SkipBack, Sliders, Volume2 } from 'lucide-react';

export default function TouchControl() {
  const [volume, setVolume] = useState(70);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeGesture, setActiveGesture] = useState('Swipe up or down to adjust volume');
  const [trackName, setTrackName] = useState('Starboy - The Weeknd (Spatial Audio)');
  const [mode, setMode] = useState('Active Noise Cancellation');

  const handleSwipeUp = () => {
    setVolume((prev) => Math.min(100, prev + 10));
    setActiveGesture('Volume Increased (+10%)');
  };

  const handleSwipeDown = () => {
    setVolume((prev) => Math.max(0, prev - 10));
    setActiveGesture('Volume Decreased (-10%)');
  };

  const handlePressOnce = () => {
    setIsPlaying(!isPlaying);
    setActiveGesture(isPlaying ? 'Playback Paused' : 'Playback Started');
  };

  const handlePressTwice = () => {
    setActiveGesture('Skipped to Next Track');
    setTrackName('Blinding Lights - The Weeknd');
  };

  const handlePressHold = () => {
    const nextMode = mode === 'Active Noise Cancellation' ? 'Adaptive Transparency' : 'Active Noise Cancellation';
    setMode(nextMode);
    setActiveGesture(`Switched mode to: ${nextMode}`);
  };

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Control
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            A higher level of control.
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            Touch control lets you easily manage playback functions from the stem. Swipe up or down to adjust volume, press to play and pause music or answer and end calls, or hold to switch between Active Noise Cancellation and Adaptive Transparency.
          </p>
        </div>

        {/* Stem Interactive Stage */}
        <div className="bg-[#111113] border border-[#262629] rounded-3xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Stem Image Viewport */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative max-w-[340px] w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-[#1f1f22] shadow-2xl">
              <img
                src="/assets/touch_control_airpod.jpg"
                alt="AirPods Pro capacitive touch sensor stem"
                className="w-full h-full object-contain p-4"
              />

              {/* Glowing Sensor Overlay Pill */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 w-8 h-20 rounded-full border border-[#00ff5f]/50 bg-[#00ff5f]/10 backdrop-blur-sm pointer-events-none animate-pulse flex items-center justify-center">
                <span className="w-1.5 h-6 bg-[#00ff5f] rounded-full" />
              </div>
            </div>

            {/* Live Gesture Status Feedback */}
            <div className="mt-4 bg-[#1c1c1e] border border-[#333336] px-4 py-2 rounded-full text-[13px] font-medium text-[#00ff5f] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff5f] animate-ping" />
              <span>{activeGesture}</span>
            </div>
          </div>

          {/* Interactive Controller Deck */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-[22px] font-semibold text-white">
              Try the capacitive touch stem:
            </h3>

            {/* Gesture Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Swipe Up/Down */}
              <div className="p-4 bg-black/60 rounded-2xl border border-[#262629] flex flex-col justify-between">
                <div>
                  <span className="text-[14px] font-semibold text-white block mb-1">
                    Swipe up / down
                  </span>
                  <span className="text-[12px] text-[#86868b] block mb-3">
                    Adjusts volume smoothly
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSwipeUp}
                    className="flex-1 bg-[#242426] hover:bg-[#333338] text-white py-1.5 rounded-lg text-[12px] font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <ChevronUp className="w-3.5 h-3.5" /> Vol +
                  </button>
                  <button
                    onClick={handleSwipeDown}
                    className="flex-1 bg-[#242426] hover:bg-[#333338] text-white py-1.5 rounded-lg text-[12px] font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <ChevronDown className="w-3.5 h-3.5" /> Vol -
                  </button>
                </div>
              </div>

              {/* Press Once */}
              <div className="p-4 bg-black/60 rounded-2xl border border-[#262629] flex flex-col justify-between">
                <div>
                  <span className="text-[14px] font-semibold text-white block mb-1">
                    Press once
                  </span>
                  <span className="text-[12px] text-[#86868b] block mb-3">
                    Play, pause, or answer call
                  </span>
                </div>
                <button
                  onClick={handlePressOnce}
                  className="w-full bg-[#242426] hover:bg-[#333338] text-white py-1.5 rounded-lg text-[12px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>

              {/* Press Twice */}
              <div className="p-4 bg-black/60 rounded-2xl border border-[#262629] flex flex-col justify-between">
                <div>
                  <span className="text-[14px] font-semibold text-white block mb-1">
                    Press twice
                  </span>
                  <span className="text-[12px] text-[#86868b] block mb-3">
                    Skip forward track
                  </span>
                </div>
                <button
                  onClick={handlePressTwice}
                  className="w-full bg-[#242426] hover:bg-[#333338] text-white py-1.5 rounded-lg text-[12px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <SkipForward className="w-3.5 h-3.5" /> Skip Track
                </button>
              </div>

              {/* Press and Hold */}
              <div className="p-4 bg-black/60 rounded-2xl border border-[#262629] flex flex-col justify-between">
                <div>
                  <span className="text-[14px] font-semibold text-white block mb-1">
                    Press and hold
                  </span>
                  <span className="text-[12px] text-[#86868b] block mb-3">
                    Switch between ANC and Transparency
                  </span>
                </div>
                <button
                  onClick={handlePressHold}
                  className="w-full bg-[#242426] hover:bg-[#333338] text-white py-1.5 rounded-lg text-[12px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5" /> Toggle Mode
                </button>
              </div>
            </div>

            {/* Volume Status Slider Preview */}
            <div className="bg-black/80 p-4 rounded-2xl border border-[#262629]">
              <div className="flex justify-between items-center text-[12px] mb-2">
                <span className="text-[#86868b] flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-white" /> Live Stem Volume
                </span>
                <span className="font-semibold text-white">{volume}%</span>
              </div>
              <div className="w-full bg-[#262629] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#00ff5f] h-full rounded-full transition-all duration-300"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <div className="mt-3 text-[12px] text-[#86868b] truncate">
                Now Playing: <span className="text-white font-medium">{trackName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
