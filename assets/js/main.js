function main() {
  isYScrollable();
  toggleHamburgerMenu();
}

// Hide the y-axis scrollbar when not needed
const outlineScroll = document.querySelector('.outline');
function isYScrollable() {
  if (outlineScroll.scrollHeight <= window.innerHeight - 63) {
    // 63 = window.innerHeight - outlineScroll.scrollHeight
    outlineScroll.style.overflowY = 'hidden';
  }
}

// Set timeout function for page redirect when splash video is loaded
function videoIsLoaded() {
  setTimeout(function() {
    redirectByLang();
  }, 18000);
}

function redirectByLang() {
  if (navigator.language == "nb" || navigator.language == "nn" || navigator.language == "no") {
    window.location.href = "./no/index.html";
  } else {
    window.location.href = "./en/index.html";
  }
}

// Set volume control to 33%, 67%, 100%
let volumePercent = document.getElementById("splashVideo");
function vol33() {
  volumePercent.volume = 0.33;
}
function vol67() {
  volumePercent.volume = 0.67;
}
function vol100() {
  volumePercent.volume = 1;
}

// hamburger-menu-icon | mobile-submenu-container
let toggleHamburgerMenu = () => {
  let hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
  let mobileSubmenuContainer = document.querySelector('.mobile-submenu-container');
  hamburgerMenuIcon.addEventListener("click", function() {
    if (mobileSubmenuContainer.style.display == "none") {
      mobileSubmenuContainer.style.display = "block";
    } else {
      mobileSubmenuContainer.style.display = "none";
    }
  });
}
