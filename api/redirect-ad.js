// Lista de anuncios en formato mp4 o webm
const ads = [
  'https://example.com/ad1.mp4',
  'https://example.com/ad2.webm',
  'https://example.com/ad3.mp4',
  'https://example.com/ad4.webm',
];

export default function handler(req, res) {
  // Seleccionar un anuncio aleatorio
  const randomAd = ads[Math.floor(Math.random() * ads.length)];
  
  // Redirigir al anuncio
  res.redirect(307, randomAd);
}
