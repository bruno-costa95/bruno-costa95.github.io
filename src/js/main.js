import { initCookies } from "/src/components/cookies/cookies.js";
import { loadFooter } from "/src/components/footer/footer.js";
import { loadHeader } from "/src/components/header/header.js";
// import { initHome } from "../../pages/home/home.js";
import { getPage } from "/src/js/utils/breakpoints.js";

//Inicia os scripts
document.addEventListener("DOMContentLoaded", () => {
    const page = getPage()

    loadHeader()
    loadFooter()
    initCookies()

    // initHome()
});