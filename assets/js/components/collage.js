export function Collage() {

    const $collage = document.createElement('collage');

    $collage.innerHTML =
    `
    <div class="container mt-5" style="padding-left:250px;padding-right:250px;">
        <div class="row">
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/1.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/2.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/3.jpg" width="100%"></img>
            </div>
        <div>
        <div class="row">
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/4.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/5.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/6.jpg" width="100%"></img>
            </div>
        <div>
        <div class="row">
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/7.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/8.jpg" width="100%"></img>
            </div>
            <div class="col col-md-2 p-2 flex-fill">
                <img class="collage-image" src="assets/img/collage/9.jpg" width="100%"></img>
            </div>
        <div>
    </div>
    <button type="button" id="buttonmodal" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="assets/img/collage/1.jpg" alt="" id="modal_image_collage" width="100%" height="100%">
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    `;

    return $collage;

}

export function collageActions() {
    $(".collage-image").click(function () {
        var m = $(this).attr('src');
        // alert(m);
        var modal =document.getElementById("buttonmodal");
        var imgmodal = document.getElementById("modal_image_collage");
        // imgmodal.getAttribute("src");
        imgmodal.removeAttribute("src");
        imgmodal.setAttribute("src",m)
        modal.click();
    });
}