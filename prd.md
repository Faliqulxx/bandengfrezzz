# PRD — Landing Page Frozen Seafood (Bandeng Premium)

| | |
|---|---|
| **Nama Proyek** | Landing Page Frozen Seafood |
| **Produk Utama** | Bandeng Frozen (Segar Beku, Cabut Duri, Presto) |
| **Produk Pendukung** | Udang, Ikan Lainnya (Kembung, Tongkol, Cumi, dll.) |
| **Tech Stack** | React + Vite + Tailwind CSS + Framer Motion + JavaScript |
| **Versi** | 1.1 (revisi: fokus estetika & motion) |
| **Tanggal** | 17 Oktober 2026 |
| **Status** | Draft untuk Review |

---

## 1. Ringkasan

Landing page satu halaman untuk menjual **ikan beku**, dengan **bandeng sebagai bintang utama**, ditambah udang dan ikan lain. Halaman dibangun dengan **React, Tailwind CSS, dan Framer Motion** agar tampil **estetik, hidup, dan modern**, tetapi tetap **sangat mudah dipahami**.

**Tujuan utama:** pengunjung melihat produk, percaya kualitasnya, lalu **langsung pesan lewat WhatsApp**.

### Prinsip Utama (Pegangan Seluruh Tim)

> **"Cantik tapi jelas."**
> Animasi dan visual dipakai untuk *memandu mata* dan *menambah selera*, bukan untuk pamer. Jika sebuah animasi membuat pengunjung bingung atau lambat, animasi itu dibuang.

## 2. Latar Belakang & Masalah

- Pembeli ragu membeli ikan beku online karena takut tidak segar.
- Penjual hanya mengandalkan foto di WhatsApp/Instagram: tidak rapi, harga tidak jelas, tidak ada bukti kualitas.
- Bisnis butuh satu halaman resmi yang tampil profesional dan bisa dibagikan sebagai link (bio IG, status WA, iklan).

## 3. Tujuan & Target Keberhasilan

| Tujuan | Indikator (KPI) | Target 3 bulan |
|---|---|---|
| Menghasilkan pesanan | Klik tombol WhatsApp | ≥ 5% dari pengunjung |
| Kesan estetik & premium | Waktu di halaman | ≥ 75 detik |
| Menjangkau pasar | Pengunjung | ≥ 3.000/bulan |
| Performa teknis | Lighthouse mobile | ≥ 90 (Performance, SEO, A11y) |
| Kemudahan dipahami | Bounce rate | < 50% |

## 4. Target Pengguna

1. **Ibu rumah tangga**: butuh ikan praktis, bersih, siap masak.
2. **Pemilik warung/restoran/katering**: beli grosir, butuh harga konsisten.
3. **Reseller/dropshipper**: cari pemasok ikan beku harga partai.
4. **Pembeli oleh-oleh/hampers**: cari bandeng presto sebagai hadiah.

> **Mobile-first:** mayoritas pengunjung memakai HP (±85%). Semua desain dan animasi dirancang untuk HP lebih dulu, lalu diperbesar ke desktop.

## 5. Ruang Lingkup

### Termasuk (In Scope)
- Landing page satu halaman, responsif, dengan animasi Framer Motion.
- Katalog produk (tanpa keranjang belanja).
- Tombol pesan WhatsApp dengan pesan otomatis per produk.
- Section kepercayaan: keunggulan, proses, testimoni, FAQ.
- SEO dasar + analytics.

### Tidak Termasuk (Versi 1)
- Keranjang belanja & pembayaran online.
- Login/akun pelanggan.
- Panel admin/CMS (data produk disimpan di file `products.js`).
- Multi-bahasa (hanya Bahasa Indonesia).

---

## 6. Konsep Desain & Estetika

### 6.1 Karakter Visual
**Segar · Bersih · Premium · Hangat.** Terinspirasi laut, es, dan hidangan yang menggugah selera.

Gaya yang dipilih: **"Clean Ocean Premium"**
- Latar terang bernuansa es, dengan blok warna navy dalam untuk kontras dramatis.
- Foto produk besar, tajam, dengan efek *floating* (melayang lembut).
- Bentuk organik: gelombang (wave), gelembung, dan lengkung halus.
- Kartu membulat besar (`rounded-3xl`), bayangan lembut, sedikit efek *glass* pada elemen tertentu.
- Ruang kosong lega, tidak penuh sesak.

### 6.2 Palet Warna

| Fungsi | Nama | Hex |
|---|---|---|
| Utama (laut dalam) | Navy | `#0B3C5D` |
| Aksen segar | Tosca | `#1FB6C1` |
| Latar | Putih Es | `#F5FAFC` |
| Penekanan selera | Oranye Udang | `#FF7A45` |
| CTA | Hijau WhatsApp | `#25D366` |
| Teks utama | Slate Gelap | `#1E293B` |
| Teks sekunder | Slate Sedang | `#64748B` |

**Aturan pemakaian:** 60% putih es, 30% navy/tosca, 10% oranye (hanya untuk label, harga, dan highlight). Hijau **hanya** untuk tombol WhatsApp supaya selalu dikenali sebagai tombol pesan.

### 6.3 Tipografi
- **Judul:** *Plus Jakarta Sans* (Bold/ExtraBold) — modern dan tegas.
- **Isi:** *Inter* (Regular/Medium) — jernih di layar kecil.
- Ukuran: judul hero `text-4xl` (HP) → `text-7xl` (desktop); isi minimal `text-base` (16px).
- Hierarki wajib jelas: **Judul besar → sub-judul → isi singkat → tombol.**

### 6.4 Prinsip "Mudah Dipahami"
1. **Satu pesan per section.** Satu layar, satu ide.
2. **Teks pendek.** Maksimal 2–3 baris per deskripsi.
3. **CTA konsisten.** Tombol hijau WhatsApp selalu terlihat dan seragam.
4. **Harga transparan.** Tampilkan harga atau "mulai dari".
5. **Bandeng paling menonjol.** Ukuran terbesar, posisi paling atas.
6. **Animasi tidak menghalangi.** Konten tetap terbaca walau animasi belum selesai.

---

## 7. Spesifikasi Motion (Framer Motion)

### 7.1 Filosofi Animasi
- **Halus dan cepat:** durasi 0.4–0.8 detik, easing lembut (`easeOut`).
- **Bermakna:** animasi menunjukkan urutan baca dan memberi umpan balik.
- **Sekali saja:** animasi scroll hanya jalan satu kali (`viewport: { once: true }`).
- **Hormati pengguna:** wajib mendukung `prefers-reduced-motion` (animasi dimatikan/disederhanakan).
- **Hanya properti ringan:** animasikan `opacity` dan `transform` (x, y, scale), bukan width/height, agar tetap 60 FPS di HP.

### 7.2 Pola Animasi Standar (Dipakai Ulang)

| Nama Pola | Efek | Dipakai di |
|---|---|---|
| `fadeUp` | Muncul dari bawah + memudar masuk (`y: 30 → 0`) | Judul, paragraf, kartu |
| `stagger` | Anak-anak muncul berurutan (jeda 0.08–0.12 dtk) | Grid produk, daftar keunggulan |
| `scaleIn` | Membesar halus dari 0.9 → 1 | Foto produk, badge |
| `float` | Melayang naik-turun pelan, tanpa henti | Foto bandeng di hero |
| `hoverLift` | Kartu naik 6px + bayangan menebal saat di-hover | Kartu produk |
| `tapPress` | Mengecil sedikit saat ditekan (`scale: 0.97`) | Semua tombol |
| `parallax` | Elemen latar bergerak lebih lambat dari scroll | Gelembung/gelombang di hero |
| `layout` | Transisi mulus saat filter berubah (`AnimatePresence` + `layout`) | Tab produk |

### 7.3 Animasi per Section

| Section | Animasi |
|---|---|
| **Navbar** | Muncul dari atas saat load; berubah jadi *glass blur* saat di-scroll; indikator menu aktif bergeser halus. |
| **Hero** | Headline muncul kata per kata/baris (`stagger`); foto bandeng masuk `scaleIn` lalu `float`; gelembung/partikel es melayang ringan di latar; tombol memantul halus saat muncul. |
| **Trust Bar** | Ikon muncul berurutan (`stagger`). |
| **Bandeng Unggulan** | Foto besar masuk dari samping; varian muncul sebagai kartu `stagger`; label "Terlaris" berdenyut halus. |
| **Produk Lain** | Tab dengan underline yang bergeser; kartu berganti dengan transisi `AnimatePresence` (keluar-masuk mulus); `hoverLift` di tiap kartu. |
| **Keunggulan** | Kartu `fadeUp` berurutan; ikon bergerak kecil saat hover. |
| **Cara Pesan** | Garis penghubung antar langkah "tergambar" saat di-scroll (`pathLength`); angka langkah muncul `scaleIn`. |
| **Harga Grosir** | Banner masuk dengan `scaleIn` + sorotan kilau lembut. |
| **Testimoni** | Carousel geser (drag/swipe) dengan inersia halus. |
| **FAQ** | Accordion membuka dengan tinggi animatif + ikon `+` berputar jadi `×`. |
| **CTA Penutup** | Latar gelombang bergerak pelan; tombol WhatsApp berdenyut halus (*pulse ring*) untuk menarik perhatian. |
| **Floating WA** | Muncul setelah scroll 300px; sedikit bergoyang tiap 8 detik. |

### 7.4 Batas Animasi (Supaya Tetap Enak Dilihat)
- Maksimal **1 animasi "besar"** per layar (misal: hero float). Sisanya kecil dan halus.
- Tidak ada animasi yang berkedip, berputar liar, atau mengganggu membaca.
- Tidak ada animasi yang menunda tampilnya tombol atau harga.
- Uji di HP kelas menengah; jika patah-patah, sederhanakan.

---

## 8. Struktur Halaman (Urutan Section)

### 8.1 Navbar (sticky)
Logo (kiri) · menu **Produk · Keunggulan · Cara Pesan · FAQ** · tombol **"Pesan"** (hijau). Di HP: hamburger dengan menu *slide-in* animatif.

### 8.2 Hero
- **Headline:** "Bandeng Beku Segar, Bersih & Siap Masak"
- **Sub-headline:** "Dari tambak pilihan, dibekukan cepat untuk menjaga rasa. Dikirim rapi sampai rumah Anda."
- **Tombol:** `Pesan via WhatsApp` (utama) · `Lihat Produk` (sekunder)
- **Visual:** foto bandeng besar melayang, gelembung dan efek es di latar.
- **Badge:** ✅ Tanpa Pengawet · ❄️ Beku Cepat · 🚚 Kirim Cepat

### 8.3 Trust Bar
🐟 Ikan Pilihan · ❄️ Beku Maksimal · 🧼 Higienis · 📦 Packing Aman

### 8.4 Bandeng Unggulan ⭐
- Judul: **"Bandeng, Andalan Kami"**
- Varian: Segar Beku (utuh) · Cabut Duri · Presto · Asap *(opsional)*
- Tiap kartu: foto, berat, harga "mulai dari", label (`Terlaris`/`Favorit`), tombol **Pesan**

### 8.5 Produk Lainnya
Tab filter **Semua · Udang · Ikan · Seafood Lain** dengan grid kartu (2 kolom HP, 3–4 kolom desktop).
Contoh: Udang Vaname, Udang Kupas, Kembung, Tongkol, Kakap, Nila, Cumi.

### 8.6 Kenapa Pilih Kami
1. **Segar & Beku Cepat**: rasa dan tekstur terjaga.
2. **Bersih & Siap Masak**: sudah disiangi.
3. **Harga Jujur**: eceran dan grosir.
4. **Pengiriman Aman**: styrofoam + es gel.

### 8.7 Cara Pesan (3 Langkah)
**Pilih produk → Chat WhatsApp → Bayar & terima.** Ditampilkan sebagai garis alur bergerak.

### 8.8 Harga Grosir / Reseller
Banner: *"Beli banyak lebih hemat. Hubungi kami untuk harga partai."* + tombol WhatsApp.

### 8.9 Testimoni
3–6 ulasan (nama, kota, foto/screenshot chat), rating bintang, carousel swipe.

### 8.10 FAQ (Accordion)
Tahan berapa lama di freezer? · Cara mencairkan? · Kirim ke mana? · Pesan jumlah besar? · Metode bayar? · Jika rusak saat sampai?

### 8.11 CTA Penutup
**"Siap Menikmati Ikan Segar Berkualitas?"** + tombol WhatsApp besar berdenyut.

### 8.12 Footer
Logo, deskripsi singkat, kontak (WA, IG, alamat, jam buka), link menu, hak cipta.

---

## 9. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| F1 | Tombol WhatsApp dengan pesan otomatis per produk (`wa.me/NOMOR?text=...`) | **Wajib** |
| F2 | Floating button WhatsApp | **Wajib** |
| F3 | Navbar sticky + smooth scroll + menu aktif sesuai posisi | **Wajib** |
| F4 | Animasi scroll-reveal dengan Framer Motion | **Wajib** |
| F5 | Tab filter produk dengan transisi mulus | Tinggi |
| F6 | Accordion FAQ animatif | Tinggi |
| F7 | Carousel testimoni (swipe) | Tinggi |
| F8 | Dukungan `prefers-reduced-motion` | Tinggi |
| F9 | Lightbox/galeri foto produk | Sedang |
| F10 | Label stok ("Tersedia"/"Habis") dari data | Sedang |
| F11 | Mode gelap | Rendah |

**Contoh pesan WhatsApp otomatis:**
> "Halo, saya mau pesan *Bandeng Cabut Duri 500gr*. Apakah stok tersedia?"

## 10. Kebutuhan Non-Fungsional

- **Performa:** LCP < 2,5 detik di 4G; gambar WebP/AVIF + `loading="lazy"`; font di-*preload*.
- **Ukuran bundle:** pakai `LazyMotion` + `domAnimation` dari Framer Motion untuk memperkecil ukuran.
- **Responsif:** nyaman dari 360px sampai 1440px+.
- **SEO:** title, meta description, heading terstruktur, alt text, Open Graph, schema `Product` & `LocalBusiness`.
- **Aksesibilitas:** kontras warna cukup, teks ≥ 16px, target sentuh ≥ 44px, navigasi keyboard, `prefers-reduced-motion`.
- **Keamanan:** HTTPS.
- **Browser:** Chrome, Safari, Firefox, Edge terbaru.

---

## 11. Teknologi & Arsitektur

### 11.1 Stack

| Kebutuhan | Pilihan |
|---|---|
| Framework | **React 18** (JavaScript) |
| Build tool | **Vite** |
| Styling | **Tailwind CSS** |
| Animasi | **Framer Motion** |
| Ikon | **Lucide React** |
| Font | Plus Jakarta Sans + Inter (Google Fonts / Fontsource) |
| Hosting | Vercel / Netlify / Cloudflare Pages |
| Analytics | Google Analytics 4 (+ Meta Pixel opsional) |

### 11.2 Struktur Folder

```
src/
├── assets/                # foto produk, logo, ilustrasi
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrustBar.jsx
│   ├── FeaturedBandeng.jsx
│   ├── ProductGrid.jsx
│   ├── ProductCard.jsx
│   ├── WhyUs.jsx
│   ├── HowToOrder.jsx
│   ├── WholesaleBanner.jsx
│   ├── Testimonials.jsx
│   ├── Faq.jsx
│   ├── FinalCta.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx   # tombol + floating
│   └── ui/
│       ├── Reveal.jsx       # wrapper animasi scroll (fadeUp)
│       └── Section.jsx      # pembungkus section (padding & judul)
├── data/
│   ├── products.js          # semua produk (nama, harga, berat, foto, kategori)
│   ├── testimonials.js
│   └── faq.js
├── lib/
│   ├── motion.js            # variants animasi yang dipakai ulang
│   └── whatsapp.js          # fungsi buat link WA dari produk
├── App.jsx
├── main.jsx
└── index.css                # Tailwind + font
```

### 11.3 Contoh Struktur Data Produk

```js
// src/data/products.js
export const products = [
  {
    id: "bandeng-cabut-duri",
    name: "Bandeng Cabut Duri",
    category: "bandeng",
    weight: "500 gr",
    price: 45000,
    image: "/img/bandeng-cabut-duri.webp",
    badge: "Terlaris",
    inStock: true,
  },
  // ...udang, ikan lain
];
```

> Dengan data terpisah, pemilik bisnis cukup mengubah satu file untuk memperbarui harga, foto, dan stok.

### 11.4 Konfigurasi Tailwind (Ringkas)

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      navy: "#0B3C5D",
      tosca: "#1FB6C1",
      ice: "#F5FAFC",
      shrimp: "#FF7A45",
      wa: "#25D366",
    },
    fontFamily: {
      heading: ["Plus Jakarta Sans", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
  },
}
```

---

## 12. Kebutuhan Konten

Yang perlu disiapkan pemilik bisnis:

- [ ] Logo (PNG/SVG) dan nama brand
- [ ] Foto produk berkualitas tinggi (bandeng semua varian, udang, ikan lain), latar bersih/terang
- [ ] Daftar produk: nama, berat, harga eceran & grosir, stok
- [ ] Nomor WhatsApp bisnis
- [ ] Area pengiriman, ongkir, jam operasional
- [ ] Testimoni pelanggan (minimal 3, lebih baik dengan foto)
- [ ] Link Instagram / marketplace
- [ ] Cerita singkat asal ikan & proses pembekuan

> **Tips foto:** foto close-up, cahaya alami, latar putih/es. Idealnya foto dipotong tanpa latar (PNG/WebP transparan) agar efek *floating* di hero tampak rapi.

## 13. Rencana Pengerjaan

| Fase | Pekerjaan | Estimasi |
|---|---|---|
| 1 | Kumpulkan konten & foto | 2–3 hari |
| 2 | Wireframe & desain visual (Figma, opsional) | 2–3 hari |
| 3 | Setup project (Vite, Tailwind, Framer Motion), komponen dasar | 1 hari |
| 4 | Bangun semua section + data produk | 3–4 hari |
| 5 | Tambah animasi & polish motion | 2 hari |
| 6 | Uji HP/desktop, optimasi performa, SEO | 1–2 hari |
| 7 | Deploy, domain, analytics | 1 hari |
| | **Total** | **± 2 minggu** |

## 14. Kriteria Selesai (Acceptance Criteria)

- [ ] Semua section 8.1–8.12 tampil rapi di HP dan desktop.
- [ ] Bandeng terlihat sebagai produk utama pada pandangan pertama.
- [ ] Setiap tombol "Pesan" membuka WhatsApp dengan pesan sesuai produk.
- [ ] Animasi halus (±60 FPS) di HP kelas menengah, tanpa patah-patah.
- [ ] Animasi mati/disederhanakan jika `prefers-reduced-motion` aktif.
- [ ] Lighthouse mobile ≥ 90 (Performance, SEO, Accessibility).
- [ ] Tidak ada gambar pecah, teks terpotong, atau scroll horizontal.
- [ ] Orang awam paham apa yang dijual dan cara memesan dalam **5 detik**.
- [ ] Harga/foto/stok bisa diubah hanya lewat file `data/products.js`.

## 15. Risiko & Solusi

| Risiko | Solusi |
|---|---|
| Animasi terlalu banyak, halaman berat/lambat | Batasi 1 animasi besar per layar, pakai `LazyMotion`, uji di HP |
| Foto produk kurang bagus | Foto ulang dengan cahaya alami + latar bersih |
| Terlalu "ramai" sehingga membingungkan | Patuhi prinsip "satu pesan per section" dan aturan warna 60/30/10 |
| Harga sering berubah | Data produk di satu file terpisah |
| Pengunjung ragu soal kesegaran | Testimoni, foto proses, garansi |
| Pengguna sensitif gerakan | Dukung `prefers-reduced-motion` |

## 16. Pengembangan Selanjutnya (Versi 2)

- Keranjang belanja & pembayaran online
- Panel admin/CMS untuk ubah produk
- Hitung ongkir otomatis
- Blog resep bandeng/udang untuk SEO
- Kode promo & program reseller
- Mode gelap & multi-bahasa

---

*Dokumen ini adalah panduan awal dan dapat disesuaikan sesuai kebutuhan bisnis.*