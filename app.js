const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img'); 

//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener
nextBtn.addEventListener('click',function(){
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});