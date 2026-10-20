/**
 * WhatsApp Integration Utilities
 * Nomor WhatsApp bisnis dapat diubah di sini
 */
export const WA_PHONE = '6281234567890';

export function createProductWhatsAppUrl(product, size = '') {
  const text = `Halo Bandeng Freeze, saya mau pesan *${product}* ${size ? `(${size})` : ''}. Apakah stok tersedia? Mohon info estimasi ongkir ke alamat saya.`;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createGeneralWhatsAppUrl(customMessage) {
  const text = customMessage || 'Halo Bandeng Freeze, saya ingin pesan produk ikan beku segar.';
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}
