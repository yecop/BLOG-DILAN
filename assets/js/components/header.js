

export function Header() {

    const $header = document.createElement("header");

    $header.innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a href="#">
                <img src="assets/img/logom_3.png" alt="Logo página" width="160px">
            </a>
            

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between ms-lg-auto">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#/quienes-somos">Quienes <br> somos</a>
                            
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#/material-aprovechable">Materiales <br> aprovechables</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#/integridad-servicios">Integridad de <br> Servicio Publico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/DINC">DINC</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/CCU">CCU</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/toneladas-aprovechadas">Toneladas <br> aprovechadas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/rutas-horarios">Rutas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/PQR">PQR</a>
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