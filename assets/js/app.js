import { BodyContent } from "./components/body-content.js";
import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";
import { TopNav } from "./components/top-nav.js";
import { Router } from "./router.js";


export function App() {

    const $root = document.getElementById('root');

    $root.appendChild(TopNav());
    $root.appendChild(Header());
    $root.appendChild(BodyContent());
    $root.appendChild(Footer());

    Router();
}
