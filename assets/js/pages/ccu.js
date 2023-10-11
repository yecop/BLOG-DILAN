export function CCU() {

    const $ccu = document.createElement('div');

    $ccu.innerHTML =
    `
    <div class="container py-5">
        <div class="row">
            <h1>CONTRATO DE CONDICIONES UNIFORMES PARA BOGOTA</h1> <br>
        </div>
    </div>

    <div class="container py-5">
        <div class="row">
            <div class="col">
                <embed src="assets/docs/contrato_de_condiciones_uniformes.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
            <div class="col">
                <embed src="assets/docs/contrato_de_condiciones_uniformes_pitalito_huila.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    </div>

    `

    return $ccu;

}