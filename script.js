// Small progressive enhancement: mark the page as interactive after load.
document.documentElement.classList.add("js-ready");

// Keep gallery placeholders visible when a local image has not been added yet.
document.querySelectorAll(".photo-slot img").forEach((img) => {
  img.addEventListener("load", () => {
    const placeholder = img.previousElementSibling;
    if (placeholder) placeholder.style.display = "none";
  });
});
