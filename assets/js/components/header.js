

export function Header() {

    const $header = document.createElement("header");

    $header.innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
                Zay
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between ms-lg-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Inicio</a>
                            <div class="dropdown-menu">
                                <a href="mision_vision.html" class="dropdown-item">Misión y Visión</a>
                                <a href="#" class="dropdown-item">Valores corporativos</a>
                                <a href="#" class="dropdown-item">Importancia ambiental</a>
                                <a href="#" class="dropdown-item">Contrato de condiciones</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Material aprovechable</a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">Papel y cartón</a>
                                <a href="#" class="dropdown-item">Plastico</a>
                                <a href="#" class="dropdown-item">Metales</a>
                                <a href="#" class="dropdown-item">Vidrios</a>
                                <a href="#" class="dropdown-item">Maderas</a>
                                <a href="#" class="dropdown-item">Textiles</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Servicios</a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">Recolección</a>
                                <a href="#" class="dropdown-item">Transporte</a>
                                <a href="#" class="dropdown-item">Clasificación</a>
                                <a href="#" class="dropdown-item">Almacenaje</a>
                                <a href="#" class="dropdown-item">Comercialización</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.html">DINC</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Toneladas aprovechadas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Rutas y horarios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/contact">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                            <div class="input-group-text">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </nav>
    `;

    return $header;
}