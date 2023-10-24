export function Tons_used() {

    const $tons_used = document.createElement('div');

    $tons_used.innerHTML =
    `
    <section class="py-5" style="background-image:url('assets/img/hero_image_dinc.jpg');">
    <div class="container align-items-center">
        <div class="row align-items-center py-5">
            <div class="col text-white">
            <br>
                <br>
            <center>
            <div class="mask">
            <div class="">
                <div class="text-white">
                <span style="font-size:2.8em" class="montserrat">consulte aqui las</span><br>
                </div>
            </div>
        </div>
        <div class="mask">
        <div class="">
        </div>

                <h1 style="color:yellow;">TONELADAS APROVECHADAS</h1> <br>
                <a class="btn-purple" href="assets/docs/toneladas_aprovechadas.xlsx" download="toneladas_aprovechadas.xlsx">Consulte aquí</a>
            </center>              
                <br>
                <br>
            </div>
            </div>
        </div>
    </section>
    `

    return $tons_used;

}