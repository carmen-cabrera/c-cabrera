(() => {
  const root = document.querySelector("#quarto-document-content");
  if (!root) return;

  const update = (event) => {
    const rect = root.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const skylineZoneTop = rect.height - 220;

    if (y >= skylineZoneTop && y <= rect.height + 20) {
      const xPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const yPct = Math.max(0, Math.min(100, (y / rect.height) * 100));
      root.style.setProperty("--mx", `${xPct}%`);
      root.style.setProperty("--my", `${yPct}%`);
      root.classList.add("skyline-active");
    } else {
      root.classList.remove("skyline-active");
    }
  };

  window.addEventListener("mousemove", update, { passive: true });
  window.addEventListener("touchmove", (event) => {
    const t = event.touches && event.touches[0];
    if (!t) return;
    update({ clientX: t.clientX, clientY: t.clientY });
  }, { passive: true });
})();
