function windowResize() {
    const pixelRatio = window.devicePixelRatio || 1;
    document.documentElement.style.setProperty('--pixel-ratio', pixelRatio);
}
window.addEventListener('resize', windowResize);
windowResize();