"use strict";

(function () {
  const artImg = document.getElementById("art-img");
  const artCredit = document.getElementById("art-credit");

  function randomArtworkUrl() {
    // Unsplash Source returns a new random image on each request with these keywords
    const width = Math.max(900, Math.min(window.innerWidth, 1600));
    const height = Math.max(1200, Math.min(window.innerHeight * 1.1 | 0, 2000));
    const sig = Math.floor(Math.random() * 1e9);
    return `https://source.unsplash.com/random/${width}x${height}/?art,painting,abstract,canvas,expressionism&sig=${sig}`;
  }

  function loadRandomArtwork() {
    if (!artImg) return;
    const url = randomArtworkUrl();
    artImg.src = url;
    if (artCredit) artCredit.textContent = "Random artwork via Unsplash";
  }

  // Click to refresh artwork
  if (artImg) {
    artImg.addEventListener("click", loadRandomArtwork);
    artImg.addEventListener("error", function () {
      // Fallback gradient if image fails
      artImg.removeAttribute("src");
      artImg.style.background = "linear-gradient(135deg, #111827, #312e81)";
      if (artCredit) artCredit.textContent = "Artwork unavailable";
    });
  }

  // Password visibility toggle
  const toggleBtn = document.querySelector("[data-toggle-password]");
  const passwordInput = document.getElementById("password");
  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", function () {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
    });
  }

  // Initial load
  window.addEventListener("load", loadRandomArtwork);
})();

