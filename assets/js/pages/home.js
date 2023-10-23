export function Home() {

    const $home = document.createElement('div');

    $home.innerHTML =
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
    <div class="mt-5">
    <br>
    <br>
      <center>
        <span class="montserrat_regular" style="color:#410677;font-size:1em;">MOMENTOS</span> <br>
        <span style="font-size:4em;color:#410677; margin-top:-300px;" class="sego">marianis</span>
      </center>
    </div>
    <div class="container mt-5" style="padding-left:250px;padding-right:250px;">
    <div class="row">
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/1.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/2.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/3.jpg" width="100%"></img>
      </div>
    <div>
    <div class="row">
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/4.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/5.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/6.jpg" width="100%"></img>
      </div>
    <div>
    <div class="row">
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/7.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/8.jpg" width="100%"></img>
      </div>
      <div class="col col-md-2 p-2 flex-fill">
        <img class="collage-image" src="assets/img/collage/9.jpg" width="100%"></img>
      </div>
    <div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
    `
    return $home;

}