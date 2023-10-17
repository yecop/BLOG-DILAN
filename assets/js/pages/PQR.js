export function PQR() {

    const $pqr = document.createElement('div');

    $pqr.innerHTML =
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
                <span style="font-size:3em" class="montserrat_bold">PQR</span><br>
                </div>
            </div>
        </div>
    </div>
    <!-- Start Contact -->
    <div class="container py-5">
        <div class="row py-5">
            <form class="col-md-9 m-auto" method="post" role="form">
                <div class="row">
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputname">Nombre</label>
                        <input type="text" class="form-control mt-1" id="name" name="name" placeholder="Nombre">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail">Correo</label>
                        <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Email">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="inputsubject">Asunto</label>
                    <input type="text" class="form-control mt-1" id="subject" name="subject" placeholder="Asunto">
                </div>
                <div class="mb-3">
                    <label for="inputmessage">Mensaje</label>
                    <textarea class="form-control mt-1" id="message" name="message" placeholder="Mensaje" rows="8"></textarea>
                </div>
                <div class="row">
                    <div class="col text-end mt-2">
                        <button type="submit" class="btn btn-success btn-lg px-3">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- End Contact -->

    `

    return $pqr;

}