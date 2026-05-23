const topbar = document.querySelector(".topbar");
const menuButton = document.querySelector("#menuButton");

menuButton?.addEventListener("click", () => {
  topbar.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => topbar.classList.remove("open"));
});

const previewTitle = document.querySelector(".launcher-preview h3");
const previewVersion = document.querySelector(".launcher-preview p");
let showingName = true;

setInterval(() => {
  if (!previewTitle || !previewVersion) return;

  previewTitle.style.opacity = "0";
  previewVersion.style.opacity = "0";

  setTimeout(() => {
    showingName = !showingName;
    previewTitle.textContent = showingName ? "V7.2.2" : "SteenBlack";
    previewVersion.textContent = showingName ? "SteenBlack Launcher" : "Servidor online ativo";
    previewTitle.style.opacity = "1";
    previewVersion.style.opacity = "1";
  }, 220);
}, 2600);
