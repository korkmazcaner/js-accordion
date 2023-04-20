const panels = document.querySelectorAll(".panel");

// forEach bir listenin elamanınların arasında gezerek içinde tanımlanana fonksiyonu her elaman bir kez uygular.
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
