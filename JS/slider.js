let current = 0;
const slides = document.querySelectorAll(".slider-image");
moveSlide = (direction)=>{
  slides[current].classList.remove("opacity-100");
  slides[current].classList.add("opacity-0");

  current = (current + direction + slides.length) % slides.length;

  slides[current].classList.remove("opacity-0");
  slides[current].classList.add("opacity-100");


}
setInterval(()=>{
  moveSlide(1);
},5000)