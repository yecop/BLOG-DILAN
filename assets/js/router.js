import { ContactMap, Contact } from "./pages/contact.js";
import { Home } from "./pages/home.js";
import { Routes } from "./pages/routes.js";
import { Dinc } from "./pages/dinc.js";
import { Usable_material } from "./pages/usable_material.js";
import { About_us } from "./pages/about_us.js";
import { Integrity_services } from "./pages/integrity_services.js";
import { CCU } from "./pages/ccu.js";
import { Tons_used } from "./pages/tons_used.js";
import { PQR } from "./pages/PQR.js";
import { Slider, sliderActions } from "./components/sider.js";
import { collageActions, Collage } from "./components/collage.js";

export function Router() {

    const d = document;
    const bodyContent = d.getElementById('body-content');
    let hash = location.hash;

    console.log('el hash es:' + hash);

    //limpiar contenido
    bodyContent.innerHTML = null;

    if (!hash || hash === '#/') {
        bodyContent.appendChild(Slider());
        sliderActions();
        bodyContent.appendChild(Home());
        bodyContent.appendChild(Collage());
        collageActions()
    } else if (hash === '#/quienes-somos') {
        bodyContent.appendChild(About_us());
    } else if (hash === '#/material-aprovechable') {
        bodyContent.appendChild(Usable_material());
    } else if (hash === '#/integridad-servicios') {
        bodyContent.appendChild(Integrity_services());
    } else if (hash === '#/DINC') {
        bodyContent.appendChild(Dinc());
    } else if (hash === '#/CCU') {
        bodyContent.appendChild(CCU());
    } else if (hash === '#/toneladas-aprovechadas') { 
        bodyContent.appendChild(Tons_used());
    } else if (hash === '#/rutas-horarios') {
        bodyContent.appendChild(Routes());
        ContactMap();
    } else if (hash === '#/PQR') {
        bodyContent.appendChild(PQR());
        // ContactMap();
    } else {
        console.log('404')
    }
    

}