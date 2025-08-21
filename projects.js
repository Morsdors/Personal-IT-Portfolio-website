document.addEventListener("DOMContentLoaded", function () {
  // Hover Video Play/Pause
  const wrappers = document.querySelectorAll(".video-wrapper");

  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector(".hover-video");

    if (!video) return;

    wrapper.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play().catch(err => console.log("Autoplay blocked:", err));
    });

    wrapper.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

  // Chocolat Lightbox
  if (typeof Chocolat !== "undefined") {
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: 'contain',
      loop: true,
    });
  }

  // AOS Animations (if you want to keep them)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1200,
    });
  }
});
