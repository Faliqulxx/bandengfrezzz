/**
 * Data Produk Resmi — Bandeng Freeze
 * Pemilik bisnis dapat mengubah harga, berat, stok, dan foto di file ini saja.
 */

export const bandengProducts = [
  {
    id: "bandeng-cabut-duri",
    name: "Bandeng Cabut Duri",
    category: "bandeng",
    weight: "500g (2 ekor)",
    price: 45000,
    priceLabel: "Rp 45.000",
    image: "/images/bandeng-cabut-duri.webp",
    badge: "TERLARIS",
    badgeType: "fire",
    badgeColor: "bg-[#F95738] text-white",
    inStock: true,
    isFeatured: true,
    pills: [
      { text: "500g (2 ekor)", icon: "weight" },
      { text: "Tanpa Duri", icon: "scissors" }
    ],
    description: "100% duri halus sudah dicabut teliti satu per satu. Daging utuh, tidak hancur.",
    fullDescription: "100% duri halus sudah dicabut teliti satu per satu. Daging utuh, tidak hancur, tinggal goreng atau bakar. Aman untuk anak-anak & lansia.",
    perks: ["Tanpa Duri", "Bebas Bau Lumpur"]
  },
  {
    id: "bandeng-presto",
    name: "Bandeng Presto Duri Lunak",
    category: "bandeng",
    weight: "500g + Sambal",
    price: 48000,
    priceLabel: "Rp 48.000",
    image: "/images/bandeng-presto.webp",
    badge: "FAVORIT",
    badgeType: "star",
    badgeColor: "bg-[#F59E0B] text-white",
    inStock: true,
    isFeatured: true,
    pills: [
      { text: "500g + Sambal", icon: "weight" },
      { text: "Duri Lunak", icon: "fire" }
    ],
    description: "Dimasak dengan bumbu rempah pilihan hingga durinya empuk sempurna.",
    fullDescription: "Dimasak dengan bumbu rempah pilihan hingga durinya empuk sempurna. Sudah termasuk sambal terasi khas. Praktis digoreng tepung telur atau langsung disajikan.",
    perks: ["Duri Lunak", "Free Sambal Terasi"]
  },
  {
    id: "bandeng-segar-beku",
    name: "Bandeng Segar Beku",
    category: "bandeng",
    weight: "1kg (2–3 ekor)",
    price: 38000,
    priceLabel: "Rp 38.000",
    image: "/images/bandeng-segar-beku.webp",
    badge: "PILIHAN SEGAR",
    badgeType: "snowflake",
    badgeColor: "bg-[#06B6D4] text-white",
    inStock: true,
    isFeatured: true,
    pills: [
      { text: "1kg (2–3 ekor)", icon: "weight" },
      { text: "Beku Cepat IQF", icon: "snowflake" }
    ],
    description: "Bandeng utuh pilihan yang sudah dibersihkan sisik dan insangnya.",
    fullDescription: "Bandeng utuh pilihan yang sudah dibersihkan sisik dan insangnya. Beku kilat IQF menjaga kesegaran mata jernih dan kenyalnya daging. Cocok untuk kuah pindang atau pepes.",
    perks: ["Utuh Bersih Disiangi", "Beku Cepat IQF"]
  },
  {
    id: "bandeng-asap",
    name: "Bandeng Asap",
    category: "bandeng",
    weight: "500g (1 ekor besar)",
    price: 52000,
    priceLabel: "Rp 52.000",
    image: "/images/bandeng-asap.webp",
    badge: "ASAP GURIH",
    badgeType: "smoke",
    badgeColor: "bg-[#0B3C5D] text-white",
    inStock: true,
    isFeatured: true,
    pills: [
      { text: "500g (1 ekor besar)", icon: "weight" },
      { text: "Aroma Asap Alami", icon: "leaf" }
    ],
    description: "Pengasapan alami menggunakan serbuk kayu pilihan yang menghasilkan aroma dan rasa khas.",
    fullDescription: "Pengasapan alami menggunakan serbuk kayu buah pilihan yang menghasilkan aroma smokey harum menggugah selera. Rasa gurih meresap sampai ke serat daging terdalam.",
    perks: ["Aroma Asap Kayu Buah", "Tahan Lama"]
  }
];

export const otherProducts = [
  {
    id: "otak-otak-bandeng",
    name: "Otak Otak Bandeng",
    category: "olahan",
    weight: "1 Ekor (Kemasan Vacuum)",
    price: 35000,
    priceLabel: "Rp 35.000",
    image: "/images/katalog-otak-otak.webp",
    inStock: true,
    description: "Otak-otak ikan bandeng istimewa dengan rempah pilihan dibungkus kulit ikan alami. Daging lembut gurih tanpa duri, siap digoreng atau dibakar.",
    perks: ["Tanpa Duri", "Bumbu Rempah Alami", "Kemasan Vacuum"]
  },
  {
    id: "bandeng-cabut-duri-katalog",
    name: "Bandeng Cabut Duri",
    category: "segar",
    weight: "Pack Isi 4 Ekor",
    price: 45000,
    priceLabel: "Rp 45.000",
    image: "/images/katalog-cabut-duri.webp",
    inStock: true,
    description: "100% duri halus sudah dicabut teliti satu per satu. Daging utuh, bersih disiangi, dikemas vacuum higienis per ekor siap masak.",
    perks: ["Bebas Duri", "Disiangi Bersih", "Higienis Vacuum"]
  },
  {
    id: "bandeng-frozen",
    name: "Bandeng Frozen",
    category: "segar",
    weight: "500g (2–3 ekor)",
    price: 38000,
    priceLabel: "Rp 38.000",
    image: "/images/katalog-bandeng-frozen.webp",
    inStock: true,
    description: "Bandeng segar pilihan langsung dari tambak berstandar ekspor, dibekukan cepat IQF untuk mengunci kesegaran alami daging ikan.",
    perks: ["Beku Cepat IQF", "Bebas Bau Lumpur", "Segar Alami"]
  },
  {
    id: "stick-otak-otak-bandeng",
    name: "Stick Otak Otak Bandeng",
    category: "olahan",
    weight: "1 Pack Isi 5 Tusuk",
    price: 28000,
    priceLabel: "Rp 28.000",
    image: "/images/katalog-stick-otak-otak.webp",
    inStock: true,
    description: "Camilan dan lauk praktis otak-otak bandeng bertusuk bambu alami. Bumbu gurih meresap lezat, favorit keluarga dan anak-anak.",
    perks: ["Praktis Siap Goreng", "Gurih Lezat", "Favorit Anak-anak"]
  },
  {
    id: "bandeng-presto-katalog",
    name: "Bandeng Presto",
    category: "siapsaji",
    weight: "500g (2 ekor) + Sambal",
    price: 48000,
    priceLabel: "Rp 48.000",
    image: "/images/katalog-bandeng-presto.webp",
    inStock: true,
    description: "Bandeng presto empuk duri lunak dengan bumbu kuning rempah tradisional yang meresap sempurna sampai ke tulang. Sudah termasuk sambal.",
    perks: ["Duri Lunak", "Bumbu Kuning Rempah", "Free Sambal"]
  },
  {
    id: "bandeng-asap-presto",
    name: "Bandeng Asap Presto",
    category: "siapsaji",
    weight: "500g (1 ekor besar)",
    price: 52000,
    priceLabel: "Rp 52.000",
    image: "/images/katalog-bandeng-asap-presto.webp",
    inStock: true,
    description: "Perpaduan kelezatan presto duri lunak dengan aroma harum pengasapan alami kayu buah pilihan. Rasa gurih smokey khas dan tahan lama.",
    perks: ["Aroma Asap Kayu Buah", "Duri Lunak", "Tahan Lama"]
  }
];

export const allProducts = [...bandengProducts, ...otherProducts];
export const products = allProducts;

