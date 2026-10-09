import React from 'react';

export default function SubNav({ onOpenBuy, onOpenSpecs, activeSection = 'overview' }) {
  return (
    <div className="sticky top-[44px] left-0 right-0 z-40 apple-glass-subnav border-b border-[#333336]/60 transition-all">
      <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Left Title */}
        <div className="flex items-center space-x-3">
          <h1 className="text-[21px] font-semibold tracking-[-0.015em] text-[#f5f5f7]">
            AirPods Pro
          </h1>
          <span className="hidden sm:inline-block text-[12px] font-normal text-[#86868b] tracking-normal pt-0.5">
            (2nd generation)
          </span>
        </div>

        {/* Right Navigation & Buy CTA */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-6 text-[12px]">
            <a
              href="#overview"
              className={`transition-colors ${
                activeSection === 'overview'
                  ? 'text-white font-medium'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              Overview
            </a>
            <button
              onClick={onOpenSpecs}
              type="button"
              className="text-[#86868b] hover:text-[#f5f5f7] transition-colors cursor-pointer"
            >
              Tech Specs
            </button>
          </div>

          <button
            onClick={onOpenBuy}
            type="button"
            className="apple-btn-primary text-[12px] py-1 px-3.5 h-[28px] font-medium"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
