import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenCart, cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Store', href: '#' },
    { label: 'Mac', href: '#' },
    { label: 'iPad', href: '#' },
    { label: 'iPhone', href: '#' },
    { label: 'Watch', href: '#' },
    { label: 'AirPods', href: '#', active: true },
    { label: 'TV & Home', href: '#' },
    { label: 'Entertainment', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Support', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-glass-nav border-b border-[#333336]/40 transition-all duration-300">
      <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between">
        {/* Apple Logo */}
        <a 
          href="#" 
          className="text-[#f5f5f7] hover:opacity-70 transition-opacity flex items-center justify-center p-1"
          aria-label="Apple Home"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.65-7.74-11.86-14.1-6.1-9.25-10.9-19.78-14.41-31.6-3.51-11.82-5.27-23.08-5.27-33.78 0-14.42 3.65-26.65 10.94-36.68 7.3-10.04 16.59-15.15 27.89-15.34 4.58 0 9.87 1.25 15.86 3.75 5.99 2.5 9.87 3.84 11.64 4.02 2.39-.44 6.64-1.9 12.75-4.38 6.1-2.48 11.45-3.6 16.06-3.37 12.82.65 23.36 5.4 31.61 14.25-11.05 6.74-16.47 16.2-16.27 28.37.2 9.58 3.82 17.65 10.86 24.22 7.03 6.56 15.42 10.23 25.17 11.01-2.4 7.42-5.44 14.72-9.12 21.91zM119.22 31.84c0-7.39 2.65-14.39 7.95-21 5.3-6.61 11.98-10.84 20.04-12.7.2 1.63.3 2.94.3 3.94 0 7.4-2.75 14.45-8.24 21.14-5.49 6.69-12.19 10.74-20.05 12.15-.02-1.19-.02-2.19 0-3.53z" />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`apple-nav-link text-[12px] font-normal ${
                link.active ? 'text-white' : 'text-[#d1d1d6]/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center space-x-5">
          <button 
            type="button" 
            className="text-[#d1d1d6]/80 hover:text-white transition-colors"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.2]" />
          </button>
          
          <button 
            type="button" 
            onClick={onOpenCart}
            className="text-[#d1d1d6]/80 hover:text-white transition-colors relative"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2.2]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#0071e3] text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#d1d1d6]/80 hover:text-white transition-colors ml-1"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000]/95 backdrop-blur-3xl px-6 py-6 border-b border-[#333336] space-y-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[17px] font-medium text-[#f5f5f7] hover:text-[#2997ff] border-b border-[#222225] pb-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
