import { initCookies } from "../../components/cookies/cookies.js";
import { loadFooter } from "../../components/footer/footer.js";
import { loadHeader } from "../../components/header/header.js";

// Função para captar a página ativa: Retorna string 'página.html'   
function getPage() {
    return window.location.pathname.split('/').pop()
}

//Inicia os scripts
document.addEventListener("DOMContentLoaded", () => {
    const page = getPage()

    loadHeader()
    loadFooter()
    initCookies()
});