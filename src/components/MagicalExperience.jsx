import React, { useState } from 'react';
import { Smartphone, Laptop, Tablet, Watch, Share2, Mic, Repeat, Bell, Ear } from 'lucide-react';

export default function MagicalExperience() {
  const [paired, setPaired] = useState(false);
  const [pairingProgress, setPairingProgress] = useState(false);
  const [activeDevice, setActiveDevice] = useState('iphone');

  const handleConnect = () => {
    setPairingProgress(true);
    setTimeout(() => {
      setPairingProgress(false);
      setPaired(true);
    }, 1200);
  };

  return (
    <section className="bg-black py-24 border-b border-[#222225] text-white">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Eyebrow & Headline */}
        <div className="max-w-[800px] mb-16">
          <p className="text-[#86868b] text-[17px] sm:text-[19px] font-semibold tracking-wide uppercase mb-3">
            Magical Experience
          </p>
          <h2 className="text-[38px] sm:text-[56px] md:text-[68px] font-bold tracking-tight leading-[1.08] mb-6">
            Simplicity on a grand scale.
          </h2>
          <p className="text-[#86868b] text-[18px] sm:text-[21px] leading-[1.4] font-medium">
            From instant setup to Siri commands, AirPods Pro hold all the qualities that make the AirPods family so magical. And new features give you the ability to move through more tasks with unprecedented ease.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature 1: Easy, Magical Setup with Interactive iOS Pairing Sheet */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6 flex items-center justify-center p-4">
              <img
                src="/assets/magical_screen_setup.jpg"
                alt="iPhone instant setup with AirPods Pro"
                className="w-full h-full object-contain"
              />

              {/* Interactive iOS Connect Card Simulation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-[#1c1c1e]/90 backdrop-blur-xl border border-[#3a3a40] p-4 rounded-2xl shadow-2xl text-center">
                <span className="text-[13px] font-semibold text-white block">
                  {paired ? 'AirPods Pro Connected' : 'AirPods Pro'}
                </span>
                <span className="text-[11px] text-[#86868b] block mb-2.5">
                  {paired ? '100% Battery • Spatial Audio Active' : 'One-tap setup for iCloud devices'}
                </span>
                {!paired ? (
                  <button
                    onClick={handleConnect}
                    disabled={pairingProgress}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer"
                  >
                    {pairingProgress ? 'Connecting...' : 'Connect'}
                  </button>
                ) : (
                  <button
                    onClick={() => setPaired(false)}
                    className="w-full bg-[#30d158]/20 border border-[#30d158]/40 text-[#30d158] py-1.5 rounded-full text-[12px] font-medium cursor-pointer"
                  >
                    ✓ Connected (Click to reset)
                  </button>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Easy, magical setup
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Place AirPods Pro near your iPhone and tap Connect to seamlessly pair with every device in your iCloud account. And if your case is custom engraved, the same engraving appears on your screen — for an even more personal experience.
              </p>
            </div>
          </div>

          {/* Feature 2: Audio Sharing */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6 flex items-center justify-center p-4">
              <img
                src="/assets/magical_screen_audio.jpg"
                alt="Audio sharing between two pairs of AirPods"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Audio Sharing
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Easily share a song or show between any two sets of AirPods. Simply bring AirPods near the iPhone, iPad, or Apple TV you're listening to and connect instantly.
              </p>
            </div>
          </div>
        </div>

        {/* 2 More Features: Siri & Seamless Switching */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature 3: Always-on 'Hey Siri' */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black mb-6 flex items-center justify-center p-6 border border-[#1f1f22]">
              {/* iPhone silhouette with glowing Siri orb */}
              <div className="relative flex flex-col items-center justify-center space-y-4">
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-80 animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-black/80 flex items-center justify-center border border-white/20">
                    <Mic className="w-7 h-7 text-white animate-bounce" />
                  </div>
                </div>
                <div className="bg-[#1c1c1e] border border-[#333336] px-4 py-1.5 rounded-full text-[12px] text-[#f5f5f7] font-medium shadow-lg">
                  “Hey Siri, play my favorites mix”
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Always-on “Hey Siri”
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Play music, make calls, get directions, or check your schedule simply by using your voice. Just say “Hey Siri” to activate your favorite personal assistant and stay on top of everyday tasks.
              </p>
            </div>
          </div>

          {/* Feature 4: Seamless Automatic Switching */}
          <div className="bg-[#111113] border border-[#262629] rounded-3xl p-8 flex flex-col justify-between">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black mb-6 flex flex-col items-center justify-center p-6 border border-[#1f1f22]">
              <div className="flex items-center justify-center space-x-6 mb-4">
                {[
                  { id: 'mac', label: 'Mac', icon: Laptop },
                  { id: 'ipad', label: 'iPad', icon: Tablet },
                  { id: 'iphone', label: 'iPhone', icon: Smartphone },
                  { id: 'watch', label: 'Watch', icon: Watch },
                ].map((dev) => {
                  const Icon = dev.icon;
                  const isActive = activeDevice === dev.id;
                  return (
                    <button
                      key={dev.id}
                      onClick={() => setActiveDevice(dev.id)}
                      className={`flex flex-col items-center p-3 rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/40 shadow-lg scale-105'
                          : 'text-[#86868b] hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-1" />
                      <span className="text-[11px] font-medium">{dev.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="bg-[#1c1c1e] border border-[#333336] px-4 py-1.5 rounded-full text-[12px] text-[#00ff5f] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff5f] animate-ping" />
                <span>Audio currently routing to {activeDevice.toUpperCase()}</span>
              </div>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-white mb-2">
                Seamless switching
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV. If you're playing music on your Mac, you can answer a call on your iPhone — without having to switch devices.
              </p>
            </div>
          </div>
        </div>

        {/* Accessibility & Announce Notifications Ribbons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex items-start gap-4">
            <img
              src="/assets/icon_accessibility.png"
              alt="Accessibility icon"
              className="w-10 h-10 object-contain filter invert opacity-80 mt-1"
            />
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-1">
                AirPods and accessibility
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                Conversation Boost focuses on voices directly in front of you. Headphone Accommodations amplify frequencies you need to hear clearly.
              </p>
            </div>
          </div>

          <div className="bg-[#111113] border border-[#262629] rounded-2xl p-6 flex items-start gap-4">
            <img
              src="/assets/icon_notifications.png"
              alt="Announce Notifications icon"
              className="w-10 h-10 object-contain filter invert opacity-80 mt-1"
            />
            <div>
              <h4 className="text-[17px] font-semibold text-white mb-1">
                Announce Notifications
              </h4>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                Siri can read important messages or alerts as they arrive — and you can even reply to messages with just your voice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
