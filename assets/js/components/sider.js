export function Slider() {

    const $slider = document.createElement('slider');

    $slider.innerHTML =
    `
    <div class="carousel-container5">
        <div class="carousel5">
            <div class="carousel5-item">
                <img src="assets/img/slider_1.jpg" alt="Imagen 1" height="50%" >
            </div>
            <div class="carousel5-item">
                <img src="assets/img/slider_2.jpg" alt="Imagen 2" height="50%" >
            </div>
            <div class="carousel5-item">
                <img src="assets/img/slider_3.jpg" alt="Imagen 3" height="50%" >
            </div>
        </div>
    </div>
    <div id="prev" class="changeslidemenos">❮</div>
    <div id="next" class="changeslidemas">❯</div>
    `;

    return $slider;

}

export function sliderActions() {
    var currentSlide = 0;
    var nslide = 1;
    var carousel = document.querySelector('.carousel5');
    carousel.style.animation = 'slide 16s infinite';
        
    $(".changeslidemas").click(function () {
    
        currentSlide += nslide;
            if (currentSlide < 0) {
                currentSlide = 2;
            } else if (currentSlide > 2) {
                currentSlide = 0;
            }
            carousel.style.animation = 'none';
            setTimeout(() => {    
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 0);
    });

    $(".changeslidemenos").click(function () {
        currentSlide -= nslide;
        if (currentSlide < 0) {
            currentSlide = 2;
        } else if (currentSlide > 2) {
            currentSlide = 0;
        }
        carousel.style.animation = 'none';
        setTimeout(() => {
            // carousel.style.animation = 'slide 30s infinite';
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 0); 
    });
}