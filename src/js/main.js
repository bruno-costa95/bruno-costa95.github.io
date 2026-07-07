import { initCookies } from "../../components/cookies/cookies.js";
import { loadFooter } from "../../components/footer/footer.js";
import { loadHeader } from "../../components/header/header.js";
// import { initHome } from "../../pages/home/home.js";
import { getPage } from "./utils.js";

//Inicia os scripts
document.addEventListener("DOMContentLoaded", () => {
    const page = getPage()

    loadHeader()
    loadFooter()
    initCookies()

    // initHome()
});