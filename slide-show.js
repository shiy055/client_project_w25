let currentSlide = 0;
    function moveSlide(direction) {
  const slider = document.getElementById("fundingSlider");
  const totalSlides = slider.children.length;
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
