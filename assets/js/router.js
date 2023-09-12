import { Contact } from "./pages/contact.js";
import { Home } from "./pages/home.js";


const searchRoute = (route) => {

    const defaultRoute = "",
    routes = {
        "": Home(),
        "#/": Home(),
        "#/": "",
        "#/": "",
        "#/": "",
        "#/": "",
        "#/contact": Contact(),
    }

    return routes[route] || defaultRoute;

}

export function Router() {

    const d = document;
    let hash = location.hash;

    console.log('el hash es:' + hash);

    var toRender = searchRoute(hash);

    d.getElementById('body-content').innerHTML = null;
    d.getElementById('body-content').appendChild(toRender);

    console.log(d.getElementById('mapid'))
    var mymap = L.map('mapid').setView([-23.013104, -43.394365, 13], 13);

}