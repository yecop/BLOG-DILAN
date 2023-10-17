export function CCU() {

    const $ccu = document.createElement('div');

    $ccu.innerHTML =
    `
   
    <div class="p-5 text-center bg-image rounded-3 d-flex justify-content-center align-items-center" style="
        background-image: url('assets/img/hero_image_dinc.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 60vh;">
        <div class="mask">
            <div class="">
                <div class="text-white">
                <span style="font-size:3em" class="montserrat_bold">CCU</span><br>
                    <span style="font-size:3em">Contrato de condiciones uniformes para bogotá </span> </br>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5">
        <div class="row">
            <div class="col">
                <h6 align="center">Contrato Bogotá</h6>
                <embed src="assets/docs/contrato_de_condiciones_uniformes.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
            <div class="col">
                <h6 align="center">Contrato Soacha</h6>
                <embed src="assets/docs/contrato_de_condiciones_uniformes_pitalito_huila.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    </div>

    `

    return $ccu;

}