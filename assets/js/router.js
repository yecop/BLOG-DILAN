import { ContactMap, Contact } from "./pages/contact.js";
import { Home } from "./pages/home.js";
import { Routes } from "./pages/routes.js";

export function Router() {

    const d = document;
    const bodyContent = d.getElementById('body-content');
    let hash = location.hash;

    console.log('el hash es:' + hash);

    //limpiar contenido
    bodyContent.innerHTML = null;

    if (!hash || hash === '#/') {
        bodyContent.appendChild(Home());
    } else if (hash === '#/mision-vision') {

    } else if (hash === '#/importancia-ambiental') {
       
    } else if (hash === '#/contrato-de-condiciones') {
        
    } else if (hash === '#/valores-corporativos') {

    } else if (hash === '#/rutas-horarios') {
        bodyContent.appendChild(Routes());
    } else if (hash === '#/contacto') {
        bodyContent.appendChild(Contact());
        ContactMap();
    } else {
        console.log('505')
    }
    

}