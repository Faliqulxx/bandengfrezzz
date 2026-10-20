import { Clock, MapPin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="inline-block bg-white px-3.5 py-2 rounded-2xl shadow-sm mb-4">
              <img 
                src="/images/logo-transparent.webp" 
                alt="Bandeng Freeze - Loss Tanpa Duri" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Penyedia ikan bandeng beku loss tanpa duri dan aneka seafood segar berkualitas tinggi langsung dari tambak binaan dengan standar rantai dingin (cold chain) terpercaya.
            </p>
          </div>

          {/* Operation Hours */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              Jam Operasional
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-tosca mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block">Layanan Chat & CS:</strong>
                  Senin - Minggu: 07.00 - 21.00 WIB
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tosca mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block">Jadwal Pengiriman:</strong>
                  Setiap Hari (Instant & Sameday)<br />
                  08.00 - 16.00 WIB
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              Kontak & Gudang
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tosca mt-0.5 flex-shrink-0" />
                <span>Jl. Bahari Raya No. 88, Muara Karang, Jakarta Utara 14450</span>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-wa flex-shrink-0" fill="currentColor" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>@bandengfreeze.id</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>&copy; 2026 Bandeng Freeze. Seluruh hak cipta dilindungi undang-undang.</div>
          <div>Loss Tanpa Duri · Segar · Higienis · Bebas Bau Lumpur · Garansi Dingin</div>
        </div>
      </div>
    </footer>
  );
}
