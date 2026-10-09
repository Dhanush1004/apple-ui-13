import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Hero from './components/Hero';
import AudioPerformance from './components/AudioPerformance';
import NoiseCancellation from './components/NoiseCancellation';
import TouchControl from './components/TouchControl';
import PersonalizedListening from './components/PersonalizedListening';
import ChargingCase from './components/ChargingCase';
import MagicalExperience from './components/MagicalExperience';
import AirPodsLineup from './components/AirPodsLineup';
import Footer from './components/Footer';
import TechSpecsModal from './components/TechSpecsModal';
import BuyModal from './components/BuyModal';

export default function App() {
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenBuy = (product = null) => {
    setSelectedProduct(product);
    setBuyModalOpen(true);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setToastMessage(`Added ${item.name} to your Apple Bag.`);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-apple antialiased relative selection:bg-[#0071e3] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1d1d1f] text-white border border-[#00ff5f]/50 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff5f] animate-ping" />
          <span className="text-[13px] font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Global Apple Navigation Bar */}
      <Navbar onOpenCart={() => handleOpenBuy()} cartCount={cartItems.length} />

      {/* Sticky Local AirPods Pro Header */}
      <SubNav
        onOpenBuy={() => handleOpenBuy()}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* Main AirPods Pro Page Sections matching Figma design */}
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero onOpenBuy={() => handleOpenBuy()} />

        {/* Section 2: Audio Performance & H2 Silicon */}
        <AudioPerformance />

        {/* Section 3: Noise Cancellation & Ear Tips */}
        <NoiseCancellation />

        {/* Section 4: Capacitive Stem Touch Control */}
        <TouchControl />

        {/* Section 5: Personalized Listening & Spatial Audio */}
        <PersonalizedListening />

        {/* Section 6: MagSafe Charging Case & Power */}
        <ChargingCase />

        {/* Section 7: Magical Experience & Ecosystem */}
        <MagicalExperience />

        {/* Section 8: Which AirPods are right for you (Comparison) */}
        <AirPodsLineup onSelectProduct={(prod) => handleOpenBuy(prod)} />
      </main>

      {/* Section 9: Apple Footnotes & Global Footer */}
      <Footer />

      {/* Tech Specs Modal */}
      <TechSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
      />

      {/* Buy / Checkout Modal */}
      <BuyModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        onAddToCart={handleAddToCart}
        product={selectedProduct}
      />
    </div>
  );
}
