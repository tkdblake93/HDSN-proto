// Hide the y-axis scrollbar when not needed
const outlineScroll = document.querySelector('.outline');
function isYScrollable() {
  if (outlineScroll.scrollHeight <= window.innerHeight - 63) {
    // 63 = window.innerHeight - outlineScroll.scrollHeight
    outlineScroll.style.overflowY = 'hidden';
  }
}