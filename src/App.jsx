import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedBandeng from './components/FeaturedBandeng';
import ProductGrid from './components/ProductGrid';
import WhyUs from './components/WhyUs';
import HowToOrder from './components/HowToOrder';
import WholesaleBanner from './components/WholesaleBanner';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import { FloatingWhatsApp } from './components/WhatsAppButton';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-ice font-body text-slate-main antialiased selection:bg-tosca selection:text-white">
      {/* 8.1 Navbar */}
      <Navbar />

      <main>
        {/* 8.2 Hero */}
        <Hero />

        {/* 8.3 Trust Bar */}
        <TrustBar />

        {/* 8.4 Produk Unggulan Bandeng */}
        <FeaturedBandeng onSelectProduct={setSelectedProduct} />

        {/* 8.5 Produk Lainnya */}
        <ProductGrid onSelectProduct={setSelectedProduct} />

        {/* 8.6 Kenapa Pilih Kami */}
        <WhyUs />

        {/* 8.7 Cara Pesan (3 Langkah) */}
        <HowToOrder />

        {/* 8.8 Harga Grosir / Reseller */}
        <WholesaleBanner />

        {/* 8.9 Testimoni */}
        <Testimonials />

        {/* 8.10 FAQ (Accordion) */}
        <Faq />

        {/* 8.11 CTA Penutup */}
        <FinalCta />
      </main>

      {/* 8.12 Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Product Lightbox Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
