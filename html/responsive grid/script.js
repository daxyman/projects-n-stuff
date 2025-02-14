function updateDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("width").textContent = width;
  document.getElementById("height").textContent = height;
}

window.addEventListener("resize", updateDimensions);
document.addEventListener("DOMContentLoaded", updateDimensions);
