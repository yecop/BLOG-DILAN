export function Home() {

    const $home = document.createElement('div');

    $home.innerHTML =
    `
    <div class="carousel-container5">
        <div class="carousel5">
            <div class="carousel5-item">
                <img src="assets/img/slider_1.jpg" alt="Imagen 1">
            </div>
            <div class="carousel5-item">
                <img src="assets/img/slider_2.jpg" alt="Imagen 2">
            </div>
            <div class="carousel5-item">
                <img src="assets/img/slider_3.jpg" alt="Imagen 3">
            </div>
        </div>
    </div>
    <div id="prev" onclick="changeSlide(-1)">❮</div>
    <div id="next" onclick="changeSlide(1)">❯</div>
    `
    return $home;

}