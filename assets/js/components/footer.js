

export function Footer() {

    const $footer = document.createElement('footer');

    $footer.id = 'tempaltemo_footer';
    $footer.classList.add('bg-dark');

    $footer.innerHTML =
    `
    <footer class="pb-5 pt-3" id="tempaltemo_footer" style="background-color: #410677;">
        <div class="container">
            <div class="row">
                <div class="col mt-3 mb-5 text-white">
                    <h1 align="center" class="align-self-center montserrat_regular">Contáctanos</h1>
                </div>
            </div>
           <div class="row">
                <div class="col">
                    <img src="assets/img/logo_footer.png" width="100%" alt="" style="border-right: 1px white;">
                </div>
                <div class="col border-end text-white ps-5">
                        <h1 class="montserrat_bold">BOGOTÁ</h1>
                            <p class="">
                                <img src="assets/svg/at-sign.svg" alt="">
                                <small>asomarianis@gmail.com</small>
                            </p>
                            <p class="">
                                <img src="assets/svg/map-pin.svg" alt="">
                                <small>Cr 78c Sur 76b 09</small>
                            </p>
                            <p class="">
                                <img src="assets/svg/phone.svg" alt="">
                                <small>+57 3143953209</small>
                            </p>
                            <p class="">
                            <img src="assets/svg/phone.svg" alt="">
                            <small>+57 3164414452</small>
                        </p>
                </div>
                <div class="col"></div>
           </div>
    `;

    return $footer;

}