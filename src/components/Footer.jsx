import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const footnotes = [
    "1. Compared to AirPods Pro (1st generation). Battery life depends on device settings, environment, usage, and many other factors.",
    "2. Testing conducted by Apple in August 2022 using preproduction AirPods Pro (2nd generation) with MagSafe Charging Case and software paired with iPhone 14 Pro Max units and prerelease software. Volume was set to 50% and Active Noise Cancellation was enabled.",
    "3. Up to 30 hours of listening time with the MagSafe Charging Case. Testing conducted with preproduction units. Battery life varies by use and configuration.",
    "4. Works with compatible devices running iOS 16, iPadOS 16, macOS Ventura, or watchOS 9 and later.",
    "5. Precision Finding requires a U1-equipped iPhone; availability varies by region. Find My functionality requires iOS 16 or later.",
    "6. AirPods Pro (2nd generation) and MagSafe Charging Case are sweat and water resistant for non-water sports and exercise, rated IPX4 under IEC standard 60529.",
    "7. MagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi-certified wireless charger. AirPods Pro case also works with the Apple Watch charger and Lightning / USB-C connector.",
    "8. Siri may not be available in all languages or in all areas, and features may vary by area. Internet access required. Cellular data charges may apply.",
    "9. Audio Sharing compatible with iPhone 8 or later and iPod touch (7th generation) with the latest version of iOS; and 12.9-inch iPad Pro (2nd generation or later), 11-inch iPad Pro, 10.5-inch iPad Pro, iPad (5th generation or later), iPad Air (3rd generation or later), and iPad mini (5th generation or later) with the latest version of iPadOS.",
  ];

  return (
    <footer className="bg-[#161618] text-[#86868b] text-[12px] pt-8 pb-12 border-t border-[#333336]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes List */}
        <div className="space-y-2 border-b border-[#333336] pb-8 mb-6">
          {footnotes.map((note, idx) => (
            <p key={idx} className="leading-relaxed">
              {note}
            </p>
          ))}
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 py-4 text-[#d1d1d6]/70 border-b border-[#333336] mb-8" aria-label="Breadcrumb">
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.65-7.74-11.86-14.1-6.1-9.25-10.9-19.78-14.41-31.6-3.51-11.82-5.27-23.08-5.27-33.78 0-14.42 3.65-26.65 10.94-36.68 7.3-10.04 16.59-15.15 27.89-15.34 4.58 0 9.87 1.25 15.86 3.75 5.99 2.5 9.87 3.84 11.64 4.02 2.39-.44 6.64-1.9 12.75-4.38 6.1-2.48 11.45-3.6 16.06-3.37 12.82.65 23.36 5.4 31.61 14.25-11.05 6.74-16.47 16.2-16.27 28.37.2 9.58 3.82 17.65 10.86 24.22 7.03 6.56 15.42 10.23 25.17 11.01-2.4 7.42-5.44 14.72-9.12 21.91zM119.22 31.84c0-7.39 2.65-14.39 7.95-21 5.3-6.61 11.98-10.84 20.04-12.7.2 1.63.3 2.94.3 3.94 0 7.4-2.75 14.45-8.24 21.14-5.49 6.69-12.19 10.74-20.05 12.15-.02-1.19-.02-2.19 0-3.53z" />
            </svg>
          </a>
          <ChevronRight className="w-3 h-3 text-[#55555a]" />
          <a href="#" className="hover:text-white transition-colors">AirPods</a>
          <ChevronRight className="w-3 h-3 text-[#55555a]" />
          <span className="text-[#f5f5f7]">AirPods Pro (2nd generation)</span>
        </nav>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8 text-[#d1d1d6]/80">
          <div>
            <h4 className="font-semibold text-white mb-2 text-[12px]">Shop and Learn</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mac</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iPad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Watch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AirPods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AirTag</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2 text-[12px]">Account</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Manage Your Apple Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iCloud.com</a></li>
            </ul>

            <h4 className="font-semibold text-white mt-4 mb-2 text-[12px]">Entertainment</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Apple One</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple TV+</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Music</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2 text-[12px]">Apple Store</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Genius Bar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Today at Apple</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2 text-[12px]">For Business</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Apple and Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop for Business</a></li>
            </ul>

            <h4 className="font-semibold text-white mt-4 mb-2 text-[12px]">For Education</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Apple and Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop for College</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2 text-[12px]">Apple Values</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-4 border-t border-[#333336] flex flex-col md:flex-row md:items-center justify-between gap-3 text-[#86868b]">
          <div>
            <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#d1d1d6]/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>

          <div className="text-right">
            <a href="#" className="hover:text-white transition-colors">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
