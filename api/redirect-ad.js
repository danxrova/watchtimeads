// Lista de anuncios en formato mp4 y webm desde el repositorio
const ads = [
  // 10sec
  'https://watchtimeads.vercel.app/10sec/Geronimo%20stilton%20Libro%209.mp4',
  'https://watchtimeads.vercel.app/10sec/Sunny%20Sport.mp4',
  'https://watchtimeads.vercel.app/10sec/salchichas%20rellenas%20de%20ketchup.mp4',
  
  // 15sec
  'https://watchtimeads.vercel.app/15sec/ALDI%20Frescos%2015sec.mp4',
  'https://watchtimeads.vercel.app/15sec/Uno.mp4',
  'https://watchtimeads.vercel.app/15sec/papeleo%20lobato%2015sec.webm',
  'https://watchtimeads.vercel.app/15sec/pareja%20lobato%2015sec.webm',
  'https://watchtimeads.vercel.app/15sec/zyclone.mp4',
  
  // 20sec
  'https://watchtimeads.vercel.app/20sec/Anuncio%20Prima.mp4',
  'https://watchtimeads.vercel.app/20sec/Argui%C3%B1ano%20Lidl%20pescado%2020sec.webm',
  'https://watchtimeads.vercel.app/20sec/Dinosaurios%20Cuchara.mp4',
  'https://watchtimeads.vercel.app/20sec/Kirbi%20Robots.mp4',
  'https://watchtimeads.vercel.app/20sec/Lidl%20Argui%C3%B1ano%20Embutidos.mp4',
  'https://watchtimeads.vercel.app/20sec/Pokemon%20Mundo%20Misterioso.mp4',
  'https://watchtimeads.vercel.app/20sec/Super%204.mp4',
  'https://watchtimeads.vercel.app/20sec/lobato%20basico%2020sec.mp4',
  'https://watchtimeads.vercel.app/20sec/lobato%20knock%2020sec.mp4',
  'https://watchtimeads.vercel.app/20sec/lobato%20snap%2020sec.mp4',
  
  // 30sec
  'https://watchtimeads.vercel.app/30sec/Anuncio%20IONOS.mp4',
  'https://watchtimeads.vercel.app/30sec/Mario%20y%20Sonic%20Rio%202016.mp4',
  'https://watchtimeads.vercel.app/30sec/TELEFONICA%20JOSELITO.mp4',
  'https://watchtimeads.vercel.app/30sec/Yokai%20Watch.mp4',
  
  // 60sec
  'https://watchtimeads.vercel.app/60sec/Anuncio%20Verisure.mp4',
  'https://watchtimeads.vercel.app/60sec/The%20Last%20Of%20Us.mp4',
];

export default function handler(req, res) {
  // Seleccionar un anuncio aleatorio
  const randomAd = ads[Math.floor(Math.random() * ads.length)];
  
  // Redirigir al anuncio
  res.redirect(307, randomAd);
}
