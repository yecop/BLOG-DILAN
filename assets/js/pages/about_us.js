export function About_us() {

    const $about_us = document.createElement('div');

    $about_us.innerHTML =
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
                    <span style="font-size:3em" class="montserrat_bold">¿Quiénes somos?</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid g-0" style="margin-top: 15vh; margin-bottom: 15vh">
        <div class="row g-0">
            <div class="col-lg-6 divided-info-left" >
                <div class="divided-info-text">
                    <div style="padding-right:15px">
                        <div>
                            <span class="montserrat_bold" style="font-size: 2rem; color:#3f1978; padding-left: 10px;"> NUESTRA </span>
                            <span class="montserrat_bold" style="display: block; font-size: 3rem; line-height: 3rem; width: 100%; color:#ffffff; background-color:#3f1978; border-radius:40px; padding-left: 10px; padding-right: 10px">HISTORIA</span>
                        </div>
                        <p style="margin-bottom: 0; padding-left: 10px; margin-top:5%">ORA MARIANIS nace con el propósito de cambiar la percepción del reciclaje y
                        transformar vidas, especialmente las de los recicladores asociados que carecen
                        de apoyo laboral. A través del reciclaje, llevamos el mensaje de cambio
                        ambiental y humano, transmitiendo el polen de vida como símbolo
                        de transformación.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="/assets/img/historia.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img">
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6">
                <img src="/assets/img/mision.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img">
            </div>
            <div class="col-lg-6 divided-info-right" >
                <div class="divided-info-text">
                    <div style="text-align:end; padding-left:15px">
                        <div>
                            <span class="montserrat_bold" style="font-size:1.5rem; color:#3f1978; padding-right: 10px;"> NUESTRA </span>
                            <span class="montserrat_bold" style="display: block; font-size: 3rem; line-height: 3rem;; width: 100%; color:#ffffff; background-color:#3f1978; border-radius:40px; padding-left: 10px; padding-right: 10px">MISIÓN</span>
                        </div>
                        <p style="margin-bottom: 0; padding-right: 10px; margin-top:5%">Contribuir de manera directa la preservación del medio ambiente a través de la
                        recuperación de materiales reciclables. De la misma manera, mediante el
                        aprovechamiento de dichos materiales, fomentar el mejoramiento integral de
                        las familias de los Asociados.
                        </p>
                </div>
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6 divided-info-left" >
                <div class="divided-info-text">
                    <div style="padding-right:15px">
                        <div>
                            <span class="montserrat_bold" style="font-size:1.5rem; color:#3f1978; padding-left: 10px;"> NUESTRA </span>
                            <span class="montserrat_bold" style="display: block; font-size: 3rem; line-height: 3rem; width: 100%; color:#ffffff; background-color:#3f1978; border-radius:40px; padding-left: 10px; padding-right: 10px">HISTORIA</span>
                        </div>
                        <p style="margin-bottom: 0; padding-left: 10px; margin-top:5%">A mediano plazo, ORA MARIANIS ESP será una Asociación líder, que, a través de
                        la separación en la fuente, la pre-transformación y transformación de los
                        materiales potencialmente reutilizables, contribuirá a la valorización de los
                        residuos sólidos reciclables, siendo reconocidos por la calidad de nuestros
                        productos, la contribución a la preservación del medio ambiente y la
                        sensibilización a la comunidad, fortaleciendo una cultura ciudadana de manejo
                        de los residuos sólidos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="/assets/img/valores.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img">
            </div>
        </div>
        <div class="row g-0" style="margin-top: 15vh">
            <div class="col-lg-6">
                <img src="/assets/img/Recurso 5.jpg" alt="Descripción de la imagen" class="img-fluid divided-info-img">
            </div>
            <div class="col-lg-6 divided-info-right" >
                <div class="divided-info-text">
                    <div style="text-align:end; padding-left:15px">
                        <div>
                            <span class="montserrat_bold" style="font-size:1.5rem; color:#3f1978; padding-right: 10px;">NUESTROS</span>
                            <span class="montserrat_bold" style="display: block; font-size: 3rem; line-height: 3rem; width: 100%; color:#ffffff; background-color:#3f1978; border-radius:40px; padding-left: 10px; padding-right: 10px">VALORES</span>
                        </div>
                        <p style="margin-bottom: 0; padding-right: 10px; margin-top:5%">
                        Nuestra empresa se fundamenta en sólidos valores que nos definen y guían en
                        cada acción que emprendemos. La pulcritud es el pilar que guía nuestros
                        actuares, asegurando que cada tarea se realice con meticulosidad y precisión.
                        Además, la bondad nos impulsa a hacer nuestro mayor esfuerzo día a día,
                        buscando alcanzar una transformación social significativa. Estos valores nos
                        inspiran a trabajar con integridad y compromiso, brindando un servicio de
                        calidad y generando un impacto positivo en nuestra sociedad.
                        </p>
                </div>
            </div>
        </div>
    </div>
    `

    return $about_us;

}