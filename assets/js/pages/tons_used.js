export function Tons_used() {

    const $tons_used = document.createElement('div');

    $tons_used.innerHTML =
    `
    <section class="bg-success py-5">
    <div class="container">
        <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
                <h1>Consulte aqui las toneladas aprovechadas</h1>  
                <a class="btn-purple" href="toneladas_aprovechadas.html" download="toneladas_aprovechadas.xlsx">Consulte aquí</a>
            </div>
                <div class="col-md-4">
                    <img src="assets/img/logom_2.png" alt="About Hero" width="150">
                </div>
            </div>
        </div>
    </section>
    `

    return $tons_used;

}