// Register AVIF polyfill directly using a CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/avif.js';
script.onload = () => {
    avif.register('/avif-sw.js'); // Make sure avif-sw.js is served correctly
};
document.body.appendChild(script);
