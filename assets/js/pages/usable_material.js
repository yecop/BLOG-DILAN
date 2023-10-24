export function Usable_material(){
    const $usable_material = document.createElement('div');

    $usable_material.innerHTML =
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
                <span style="font-size:3em" class="montserrat_bold">Material</span><br>
                <span style="font-size:3em" class="montserrat_bold">Aprovechable</span><br>
                </div>
            </div>
        </div>
    </div>
    <div class="container col-8" style="margin-top: 15vh; margin-bottom: 15vh">
        <div class="row g-0">
            <div class="col-lg-6">
                <img src="/assets/img/PLASTICO.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img" style="padding-right:15px">
            </div>
            <div class="col-lg-6 divided-info-right">
                <div>
                    <div style="text-align:end; padding-left:15px">
                        <div style="display:flex; justify-content:space-between; widht; font-size:2.5rem; color:#ffffff; background-color:#3f1978; border-radius:50px; padding-right: 10px">
                            <div class="circle_left"></div>
                            <span class="montserrat_bold" style="margin:0; font-size: 3rem; line-height: 3rem">Plástico</span>
                        </div>
                        <p style="margin-bottom: 0; padding-right: 10px; margin-top:5%">
                        El proceso de reciclaje de plásticos consta de varias etapas. En primer lugar, se depositan los
                        envases en el contenedor correspondiente y se trasladan a una planta de selección donde se
                        clasifican por colores. Luego, los envases se trituran, lavan y se secan para eliminar impurezas. Una
                        vez limpios, el plástico reciclado se utiliza para fabricar nuevos envases o productos. Este proceso
                        contribuye a reducir el impacto ambiental del plástico, promoviendo la conservación de recursos
                        naturales y evitando la generación de residuos. El reciclaje de plásticos es esencial para impulsar
                        una economía circular sostenible.</p>
                </div>
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6 divided-info-left" >
                <div>
                    <div style="padding-right:15px">
                        <div style="display:flex; justify-content:space-between; widht; font-size:2.5rem; color:#ffffff; background-color:#3f1978; border-radius:50px; padding-left: 10px">
                            <span class="montserrat_bold" style="margin:0; font-size: 3rem; line-height: 3rem">Metales</span>
                            <div class="circle_right"></div>
                        </div>
                        <p style="margin-bottom: 0; padding-left: 10px; margin-top:5%">
                            El proceso de reciclado empieza cuando el usuario separa sus residuos. Luego,
                            se recogen y clasifican los distintos metales, para procesarlos por separado. Las
                            latas de aluminio y acero se comprimen para llevarlas a la planta de reciclado
                            correspondiente.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="/assets/img/METALES.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img" style="padding-left:15px">
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6">
                <img src="/assets/img/VIDRIO.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img" style="padding-right:15px">
            </div>
            <div class="col-lg-6 divided-info-right" >
                <div>
                    <div style="text-align:end; padding-left:15px">
                        <div style="display:flex; justify-content:space-between; widht; font-size:2.5rem; color:#ffffff; background-color:#3f1978; border-radius:50px; padding-right: 10px">
                            <div class="circle_left"></div>
                            <span class="montserrat_bold" style="margin:0; font-size: 3rem; line-height: 3rem">Vidrio</span>
                        </div>
                        <p style="margin-bottom: 0; padding-right: 10px; margin-top:5%">El vidrio es un material que independientemente de la cantidad de veces que
                            se recicle, mantiene el 100% de las propiedades iniciales. La cadena de reciclaje
                            de este material conforma lo que podría denominarse como “un círculo
                            perfecto”, siendo todo un ejemplo de economía circular y sostenibilidad.</p>
                </div>
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6 divided-info-left" >
                <div>
                    <div style="padding-right:15px">
                        <div style="display:flex; justify-content:space-between; widht; font-size:2.5rem; color:#ffffff; background-color:#3f1978; border-radius:50px; padding-left: 10px">
                            <span class="montserrat_bold" style="margin:0; font-size: 3rem; line-height: 3rem">Madera</span>
                            <div class="circle_right"></div>
                        </div>
                        <p style="margin-bottom: 0; padding-left: 10px; margin-top:5%">
                            La madera se recicla en mayor medida en la industria, aunque no es común en
                            los hogares. La falta de contenedores específicos se debe a su menor
                            uso en viviendas.<br>
                            El reciclaje de madera es simple: se separa, tritura y se convierte en serrín o
                            virutas para fabricar nueva madera. Aproximadamente el 85% se recicla, el resto
                            se usa como combustible o para compostaje.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="/assets/img/MADERA.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img" style="padding-left:15px">
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6">
                <img src="/assets/img/TEXTIL.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img" style="padding-right:15px">
            </div>
            <div class="col-lg-6 divided-info-right" >
                <div>
                    <div style="text-align:end; padding-left:15px">
                        <div style="display:flex; justify-content:space-between; widht; font-size:2.5rem; color:#ffffff; background-color:#3f1978; border-radius:50px; padding-right: 10px">
                            <div class="circle_left"></div>
                            <span class="montserrat_bold" style="margin:0; font-size: 3rem; line-height: 3rem">Textil</span>
                        </div>
                        <p style="margin-bottom: 0; padding-right: 10px; margin-top:5%">Al igual que ocurre con el vidrio, el papel u otros materiales, la ropa también se
                            puede reciclar con el objetivo de dar un nuevo uso al material. Sin embargo, en
                            el mundo casi no existen plantas de reciclaje de ropa. En Europa, sin ir más lejos,
                            se calcula que solo un 25% del textil se recicla. La ropa desechada, con un
                            correcto tratamiento, se puede convertir en material para bayetas o para
                            aislante para industrias como la automovilística o la construcción.</p>
                </div>
            </div>
        </div>
    </div>
    `
    return $usable_material;
}