const photos = [
  "images/133785613001399020.jpg",
  "images/133834423686707622.jpg",
  "images/133840944739219570.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("slideshow-img");
const counterElement = document.getElementById("slide-counter");

function updateSlide() {
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = photos[currentIndex];
    imgElement.style.opacity = 1;
    counterElement.textContent = `${currentIndex + 1} / ${photos.length}`;
  }, 300);
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + photos.length) % photos.length;
  updateSlide();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});

setInterval(() => changeSlide(1), 8000);
