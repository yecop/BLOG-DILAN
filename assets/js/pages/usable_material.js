export function Usable_material(){
    const $usable_material = document.createElement('div');

    $usable_material.innerHTML =
    `
     <div class="my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <img src="/assets/img/PLASTICO.jpg" alt="Descripción de la imagen" class="img-fluid ml-auto">
                    </div>
                    <div class="col-md-6">
                        <div class="category-name my-1">
                            <h1>Plástico:</h1>
                        </div>
                        <p class="card-text">El proceso de reciclaje de plásticos consta de varias etapas. En primer lugar, se depositan los
                            envases en el contenedor correspondiente y se trasladan a una planta de selección donde se
                            clasifican por colores. Luego, los envases se trituran, lavan y se secan para eliminar impurezas. Una
                            vez limpios, el plástico reciclado se utiliza para fabricar nuevos envases o productos. Este proceso
                            contribuye a reducir el impacto ambiental del plástico, promoviendo la conservación de recursos
                            naturales y evitando la generación de residuos. El reciclaje de plásticos es esencial para impulsar
                            una economía circular sostenible.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="category-name my-1">
                            <h1>Metales:</h1>
                        </div>
                        <p class="card-text">El proceso de reciclado empieza cuando el usuario separa sus residuos. Luego,
                            se recogen y clasifican los distintos metales, para procesarlos por separado. Las
                            latas de aluminio y acero se comprimen para llevarlas a la planta de reciclado
                            correspondiente.</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/assets/img/METALES.jpg" alt="Descripción de la imagen" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <img src="/assets/img/VIDRIO.jpg" alt="Descripción de la imagen" class="img-fluid ml-auto">
                    </div>
                    <div class="col-md-6">
                        <div class="category-name my-1">
                            <h1>Vidrio:</h1>
                        </div>
                        <p class="card-text">El vidrio es un material que independientemente de la cantidad de veces que
                            se recicle, mantiene el 100% de las propiedades iniciales. La cadena de reciclaje
                            de este material conforma lo que podría denominarse como “un círculo
                            perfecto”, siendo todo un ejemplo de economía circular y sostenibilidad.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="category-name my-1">
                            <h1>Madera:</h1>
                        </div>
                        <p class="card-text">La madera se recicla en mayor medida en la industria, aunque no es común en
                            los hogares. La falta de contenedores específicos se debe a su menor
                            uso en viviendas.
                            
                            El reciclaje de madera es simple: se separa, tritura y se convierte en serrín o
                            virutas para fabricar nueva madera. Aproximadamente el 85% se recicla, el resto
                            se usa como combustible o para compostaje.</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/assets/img/MADERA.jpg" alt="Descripción de la imagen" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <img src="/assets/img/TEXTIL.jpg" alt="Descripción de la imagen" class="img-fluid ml-auto">
                    </div>
                    <div class="col-md-6">
                        <div class="category-name my-1">
                            <h1>Textil:</h1>
                        </div>
                        <p class="card-text">Al igual que ocurre con el vidrio, el papel u otros materiales, la ropa también se
                            puede reciclar con el objetivo de dar un nuevo uso al material. Sin embargo, en
                            el mundo casi no existen plantas de reciclaje de ropa. En Europa, sin ir más lejos,
                            se calcula que solo un 25% del textil se recicla. La ropa desechada, con un
                            correcto tratamiento, se puede convertir en material para bayetas o para
                            aislante para industrias como la automovilística o la construcción.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    return $usable_material;
}