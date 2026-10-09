import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function AirPodsLineup({ onSelectProduct }) {
  const products = [
    {
      id: 'airpods-2',
      name: 'AirPods',
      generation: '2nd generation',
      price: '$129',
      image: '/assets/compare_airpods_2nd_gen.png',
      spatialAudio: false,
      anc: false,
      waterResistant: false,
      caseType: 'Lightning Charging Case',
      singleBattery: 'Up to 5 hours',
      singleBatteryDesc: 'of listening time on a single charge',
      caseBattery: 'More than 24 hours',
      caseBatteryDesc: 'of listening time with case',
    },
    {
      id: 'airpods-3',
      name: 'AirPods',
      generation: '3rd generation',
      price: '$169',
      image: '/assets/compare_airpods_3rd_gen.png',
      spatialAudio: true,
      anc: false,
      waterResistant: true,
      caseType: 'Lightning or MagSafe Case',
      singleBattery: 'Up to 6 hours',
      singleBatteryDesc: 'of listening time on a single charge',
      caseBattery: 'Up to 30 hours',
      caseBatteryDesc: 'of listening time with case',
    },
    {
      id: 'airpods-pro-2',
      name: 'AirPods Pro',
      generation: '2nd generation',
      price: '$249',
      featured: true,
      image: '/assets/compare_airpods_pro.png',
      spatialAudio: true,
      anc: true,
      waterResistant: true,
      caseType: 'MagSafe Case (speaker, lanyard)',
      singleBattery: 'Up to 6 hours',
      singleBatteryDesc: 'of listening time with ANC enabled',
      caseBattery: 'Up to 30 hours',
      caseBatteryDesc: 'of listening time with case',
    },
    {
      id: 'airpods-max',
      name: 'AirPods Max',
      generation: '',
      price: '$549',
      image: '/assets/compare_airpods_max.png',
      spatialAudio: true,
      anc: true,
      waterResistant: false,
      caseType: 'Smart Case',
      singleBattery: 'Up to 20 hours',
      singleBatteryDesc: 'of listening time on a single charge',
      caseBattery: 'Smart Case',
      caseBatteryDesc: 'preserves ultra-low-power state',
    },
  ];

  return (
    <section className="bg-white text-[#1d1d1f] py-24 border-t border-b border-[#d2d2d7]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] sm:text-[48px] md:text-[56px] font-bold tracking-tight leading-[1.08] text-[#1d1d1f]">
            Which AirPods are<br className="hidden sm:inline" /> right for you?
          </h2>
        </div>

        {/* 4-Column Product Lineup Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col text-center rounded-2xl p-4 transition-all ${
                item.featured ? 'bg-[#f5f5f7]/80 ring-1 ring-[#0071e3]/30' : ''
              }`}
            >
              {/* Product Visual */}
              <div className="h-[180px] sm:h-[220px] flex items-center justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-[160px] sm:max-h-[190px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="min-h-[100px] mb-4">
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] leading-tight">
                  {item.name}
                </h3>
                {item.generation && (
                  <p className="text-[13px] text-[#86868b] font-normal">
                    {item.generation}
                  </p>
                )}
                <p className="text-[15px] font-semibold text-[#1d1d1f] mt-2">
                  {item.price}
                </p>
              </div>

              {/* Buy CTA */}
              <div className="mb-8">
                <button
                  onClick={() => onSelectProduct(item)}
                  className="apple-btn-primary w-full max-w-[140px] mx-auto text-[13px] py-1.5 px-4 font-normal shadow-sm"
                >
                  Buy
                </button>
              </div>

              {/* Feature 1: Spatial Audio */}
              <div className="border-t border-[#e5e5ea] py-6 flex flex-col items-center justify-center min-h-[90px]">
                {item.spatialAudio ? (
                  <>
                    <img
                      src="/assets/icon_spatial_audio.png"
                      alt="Spatial Audio Icon"
                      className="w-8 h-8 object-contain mb-2"
                    />
                    <span className="text-[12px] text-[#1d1d1f] font-medium leading-snug">
                      Personalized Spatial Audio with dynamic head tracking
                    </span>
                  </>
                ) : (
                  <span className="text-[24px] text-[#86868b] leading-none">—</span>
                )}
              </div>

              {/* Feature 2: Active Noise Cancellation */}
              <div className="border-t border-[#e5e5ea] py-6 flex flex-col items-center justify-center min-h-[90px]">
                {item.anc ? (
                  <>
                    <img
                      src="/assets/icon_noise_cancellation.png"
                      alt="Active Noise Cancellation Icon"
                      className="w-8 h-8 object-contain mb-2"
                    />
                    <span className="text-[12px] text-[#1d1d1f] font-medium leading-snug">
                      Active Noise Cancellation &amp; Transparency mode
                    </span>
                  </>
                ) : (
                  <span className="text-[24px] text-[#86868b] leading-none">—</span>
                )}
              </div>

              {/* Feature 3: Sweat & Water Resistance */}
              <div className="border-t border-[#e5e5ea] py-6 flex flex-col items-center justify-center min-h-[90px]">
                {item.waterResistant ? (
                  <>
                    <img
                      src="/assets/icon_water_resistent.png"
                      alt="Sweat and water resistance Icon"
                      className="w-8 h-8 object-contain mb-2"
                    />
                    <span className="text-[12px] text-[#1d1d1f] font-medium leading-snug">
                      Sweat and water resistant (IPX4)
                    </span>
                  </>
                ) : (
                  <span className="text-[24px] text-[#86868b] leading-none">—</span>
                )}
              </div>

              {/* Feature 4: Charging Case */}
              <div className="border-t border-[#e5e5ea] py-6 flex flex-col items-center justify-center min-h-[90px]">
                <span className="text-[13px] text-[#1d1d1f] font-medium leading-snug">
                  {item.caseType}
                </span>
              </div>

              {/* Feature 5: Battery Life */}
              <div className="border-t border-[#e5e5ea] py-6 flex flex-col items-center justify-center min-h-[110px]">
                <span className="text-[18px] font-bold text-[#1d1d1f] block mb-0.5">
                  {item.singleBattery}
                </span>
                <span className="text-[12px] text-[#86868b] leading-tight block mb-3">
                  {item.singleBatteryDesc}
                </span>
                <span className="text-[16px] font-semibold text-[#1d1d1f] block mb-0.5">
                  {item.caseBattery}
                </span>
                <span className="text-[11px] text-[#86868b] leading-tight">
                  {item.caseBatteryDesc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compare All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-[#0071e3] hover:underline text-[16px] font-medium"
          >
            <span>Compare all AirPods models</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
