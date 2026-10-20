# Samudra Bandeng — Landing Page Frozen Seafood Premium (v1.1)

Landing page modern berkecepatan tinggi dengan estetika **"Clean Ocean Premium"**, dibangun dengan **React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React** sesuai spesifikasi revisi [prd.md](file:///e:/Project/landing%20page/Frozen%20Seafood%20%28Bandeng%20Premium%29/prd.md) (Versi 1.1).

---

## 🚀 Fitur Unggulan

- **Framer Motion 60 FPS:** Animasi *fadeUp*, *scaleIn*, *stagger*, dan *float* yang halus untuk pengalaman visual premium tanpa menghambat kecepatan membaca.
- **Dukungan `prefers-reduced-motion`:** Animasi disederhanakan/dimatikan otomatis bagi pengguna yang sensitif gerakan.
- **Katalog Produk Dinamis via Satu File:** Seluruh data produk, harga, berat, foto, dan status stok terpusat di [src/data/products.js](file:///e:/Project/landing%20page/Frozen%20Seafood%20%28Bandeng%20Premium%29/src/data/products.js).
- **Direct WhatsApp Conversion:** Setiap produk memiliki tombol *Pesan* yang otomatis membuka WhatsApp dengan pesan terformat rapi sesuai produk dan varian yang dipilih.
- **Tab Filter Produk Interaktif:** Pengunjung dapat memfilter produk berdasarkan kategori (*Semua, Aneka Udang, Ikan Laut, Seafood Lain*) dengan transisi mulus `AnimatePresence`.
- **Interactive Lightbox Modal:** Klik pada gambar produk untuk membuka pop-up gambar besar, keterangan detail, dan tombol pesan langsung.
- **Accordion FAQ Animatif:** 6 tanya jawab seputar ketahanan freezer, cara thawing (mencairkan), pengiriman, grosir, metode pembayaran, dan garansi 100%.
- **Floating WhatsApp Widget:** Tombol WhatsApp melayang di pojok kanan bawah dengan balon rekomendasi yang dapat ditutup.
- **Mobile-First Responsif:** Navigasi responsif dengan drawer menu *slide-in* untuk tampilan layar ponsel (360px) hingga layar desktop lebar (1440px+).

---

## 📁 Struktur Direktori Proyek

Sesuai spesifikasi **Section 11.2 PRD**:

```
Frozen Seafood (Bandeng Premium)/
├── index.html                   # HTML entry point dengan Schema.org JSON-LD & SEO
├── package.json                 # React 18, Vite, Tailwind CSS, Framer Motion, Lucide React
├── vite.config.js               # Konfigurasi Vite dev server
├── tailwind.config.js           # Konfigurasi warna resmi (navy, tosca, ice, shrimp, wa)
├── postcss.config.js
├── prd.md                       # Product Requirement Document v1.1
├── README.md                    # Dokumentasi teknis proyek
├── public/
│   └── images/                  # Aset foto kuliner beresolusi tinggi
└── src/
    ├── components/
    │   ├── Navbar.jsx           # Sticky navbar + mobile drawer
    │   ├── Hero.jsx             # Hero section dengan floating visual & trust badge
    │   ├── TrustBar.jsx         # Strip kepercayaan 4 pilar
    │   ├── FeaturedBandeng.jsx  # 4 varian bandeng unggulan
    │   ├── ProductCard.jsx      # Kartu produk interaktif
    │   ├── ProductGrid.jsx      # Grid filter tab seafood lainnya
    │   ├── WhyUs.jsx            # Keunggulan & showcase kemasan cold-chain
    │   ├── HowToOrder.jsx       # 3 langkah pemesanan
    │   ├── WholesaleBanner.jsx  # Banner grosir & reseller B2B
    │   ├── Testimonials.jsx     # Ulasan pelanggan terverifikasi
    │   ├── Faq.jsx              # Accordion FAQ animatif
    │   ├── FinalCta.jsx         # Banner ajakan penutup
    │   ├── Footer.jsx           # Alamat depo, jam operasional, link sosial
    │   ├── WhatsAppButton.jsx   # Tombol pesan & floating WA widget
    │   ├── ProductModal.jsx     # Pop-up lightbox preview produk
    │   └── ui/
    │       ├── Reveal.jsx       # Wrapper animasi scroll fadeUp
    │       └── Section.jsx      # Pembungkus section seragam
    ├── data/
    │   ├── products.js          # Pusat data produk (harga, stok, berat, foto)
    │   ├── testimonials.js      # Data testimoni
    │   └── faq.js               # Data tanya jawab FAQ
    ├── lib/
    │   ├── motion.js            # Variants animasi Framer Motion reusable
    │   └── whatsapp.js          # Generator URL pemesanan WhatsApp
    ├── App.jsx                  # Komponen induk menyusun seluruh section
    ├── main.jsx                 # Entry point React
    └── index.css                # Tailwind directives & fonts
```

---

## ⚙️ Panduan Penggunaan Pemilik Bisnis

### 1. Mengubah Nomor WhatsApp Bisnis
Buka [src/lib/whatsapp.js](file:///e:/Project/landing%20page/Frozen%20Seafood%20%28Bandeng%20Premium%29/src/lib/whatsapp.js) baris ke-5:
```javascript
export const WA_PHONE = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
```

### 2. Mengubah Harga, Foto, atau Stok Produk
Buka [src/data/products.js](file:///e:/Project/landing%20page/Frozen%20Seafood%20%28Bandeng%20Premium%29/src/data/products.js):
```javascript
{
  id: "bandeng-cabut-duri",
  name: "Bandeng Cabut Duri",
  weight: "500g (2 ekor)",
  price: 45000,
  priceLabel: "Rp 45.000",
  image: "/images/bandeng-cabut-duri.webp",
  badge: "Terlaris",
  inStock: true,
  // ...
}
```

---

## 💻 Menjalankan & Membangun Proyek

```bash
# Menjalankan development server
npm run dev
# Buka di browser: http://localhost:3000/

# Membangun bundle produksi
npm run build

# Menjalankan preview hasil build produksi
npm run preview
```
