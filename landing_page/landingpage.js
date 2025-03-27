
// Add the video background to the hero section
document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const videoElement = document.createElement('video');

    // Set video attributes
    videoElement.className = 'hero-video';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsInline = true;

    // Create source element
    const sourceElement = document.createElement('source');
    sourceElement.src = '/slutprojektwebutveckling//media/Tennis  FX3  Cinematic Short Promo - flocktoflash (1080p, h264).mp4';
    sourceElement.type = 'video/mp4';

    // Append source to video
    videoElement.appendChild(sourceElement);

    // Inserts video at the beginning of hero section
    heroSection.insertBefore(videoElement, heroSection.firstChild);
});
