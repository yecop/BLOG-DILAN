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

    <div class="container ">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <img src="assets/img/collage/1.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 1">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/2.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 2">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/3.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 3">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <img src="assets/img/collage/4.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 4">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/5.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 5">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/6.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 6">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <img src="assets/img/collage/7.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 7">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/8.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 8">
      </div>
      <div class="col-md-4">
        <img src="assets/img/collage/9.jpg" style="max-width:100px; max-heigth:100px;" alt="Imagen 9">
      </div>
    </div>
  </div>
    `
    return $home;

}