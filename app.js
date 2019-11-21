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
nextBtn.addEventListener('click', function() {
    if(counter >= carouselImages.length -1) return;
    carouselSlider.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', function() {
    if (counter <= 0) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlider.addEventListener('transitionend', function() {
    console.log(carouselImages[counter]);
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlider.style.transform = "none"; 
        counter = carouselImages.length -2;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlider.style.transform = "none"; 
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
