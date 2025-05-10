// // Swipper.js code
// const swiper = new Swiper(".swiper", {
//   direction: "vertical",
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });



// video modal ishlash
let currentPlayButton = null;
let videoPlaying = false;

const overlay = document.getElementById("videoOverlay");
const videoBox = document.getElementById("videoBox");
const videoFrame = document.getElementById("videoFrame");
const closeButton = document.getElementById("closeButton");

function openVideoModal(button, videoUrl) {
  currentPlayButton = button;
  videoFrame.src = videoUrl + "?autoplay=1&controls=1";
  overlay.style.display = "flex";
  videoBox.classList.remove("fade-out");
  button.className = "ri-pause-fill play-button";
  videoPlaying = true;
}

function closeModal() {
  videoBox.classList.add("fade-out");
  if (currentPlayButton) {
    currentPlayButton.className = "ri-play-fill play-button";
  }
  setTimeout(() => {
    overlay.style.display = "none";
    videoBox.classList.remove("fade-out");
    videoFrame.src = "";
    videoPlaying = false;
    currentPlayButton = null;
  }, 300);
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay || e.target === closeButton) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.style.display === "flex") {
    closeModal();
  }
});


