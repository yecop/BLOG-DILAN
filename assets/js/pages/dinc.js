


export function Dinc() {

    const $dinc = document.createElement('div');

    $dinc.innerHTML =
    `
     <!-- hero page -->
     <div class="p-5 text-center bg-image rounded-3 d-flex justify-content-center align-items-center" style="
        background-image: url('assets/img/hero_image_dinc.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 60vh;">
        <div class="mask">
            <div class="">
                <div class="text-white">
                    <span style="font-size:3em">Incentivo a la separación </span> </br>
                    <span style="font-size:3em">en la Fuente</span>
                    <span style="font-size:3em" class="montserrat_bold">DINC</span>
                </div>
            </div>
        </div>
    </div>
    <!--Body content-->
    <div class="container col-8" style="margin-top: 15vh; margin-bottom: 15vh">
        <div class="row">
            <div class="col">
                <p style="color: #3f1978">
                    De acuerdo al <a target="_blank" href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30021592" style="text-decoration: none; color: inherit">
                    Decreto MVCT 596 de 2016 </a>, los prestadores de la actividad de aprovechamiento del
                    servicio público de aseo pueden otorgar un incentivo a los usuarios que dispongan sus residuos
                    separados en la fuente con un nivel inferior al 20% de rechazo. Para el caso de la ciudad de
                    Bogotá, los usuarios deben entregarle al prestador de aprovechamiento los residuos
                    potencialmente aprovechables en Bolsa Blanca y el prestador debe certificar que al menos el
                    80% de los residuos que se encuentran en la Bolsa Blanca son efectivamente aprovechables.
                    Con dicha certificación, el usuario puede solicitar el descuento en la tarifa con cargo a la
                    factura de aseo. 
       
                </p>
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <span class="montserrat_bold" style="font-size:1.3rem; color:#3f1978"> Norma </span>
                <span class="montserrat_medium" style="font-size:1.3rem"> que regula el incentivo a </span>
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <span class="" style="font-size:2.5rem; color:#fff908; background-color:#3f1978; border-radius:50px; padding-left: 10px; padding-right: 10px"> La separación</span>
                <span class="" style="font-size:2.5rem; color:#3f1978"> en la Fuente </span>
                <span class="montserrat_bold" style="font-size:2.5rem; color:#3f1978"> DINC </span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p>
                    Artículo 2.3.2.5.2.2.4.Incentivo a la separación en la fuente (DINC). Aquellas macrorrutas de recolección 
                    de residuos aprovechables, que tengan niveles de rechazo inferiores al 20% de los residuos presentados, les 
                    será otorgado un incentivo a la separación en la fuente (DINC). Este incentivo se mantendrá siempre y cuando 
                    los porcentajes de rechazo no superen dicho valor. La persona prestadora de la actividad de aprovechamiento 
                    deberá llevar un registro de las cantidades de residuos efectivamente aprovechados y los rechazos asociados 
                    a cada macrorruta de recolección. Para hacer efectivo el incentivo a la separación en la fuente (DINC) la 
                    persona prestadora de la actividad de aprovechamiento deberá reportar la base de datos de los suscriptores 
                    beneficiarios a: 
                </p>
            </div>
        </div>
        
        <div class="row my-5">
            <div class="col-xl-6 col-sm-12" style="padding-top: 35px">
                <div style="position: relative; width: 100%;">
                    <img style="max-width:100%; height: 250px; padding-left:15%;" src="assets/img/1_numero.png">
                    <div style="position: absolute; top: 50%; width:70%; left: 30%; transform: translateY(-50%); text-align: left; padding: 10px;">
                        <p class="montserrat_semibold" style="color:#3f1978">La persona prestadora de la actividad de recolección y transporte de residuos no aprovechables en su area de prestación.</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-12" style="padding-top: 35px">
                <div style="position: relative; width: 100%;">
                <img style="max-width:100%; height: 250px; padding-left:15%;" src="assets/img/2_numero.png">
                <div style="position: absolute; top: 50%; width:50%; left: 30%; transform: translateY(-50%); text-align: left; padding: 10px;">
                        <p class="montserrat_semibold" style="color:#3f1978">Sistema Único de Información (SUI).</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    return $dinc;

}