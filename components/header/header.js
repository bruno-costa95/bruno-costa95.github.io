export async function loadHeader() {
    const res = await fetch("components/header/header.html");
    const data = await res.text();

    document.getElementById("header").innerHTML = data;

    const toggleBtn = document.querySelector(".toggle-btn");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-list a");

    if (!toggleBtn || !nav) return;

    // ===== abrir / fechar menu =====
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
        nav.classList.toggle("active");

        document.body.style.overflow =
            nav.classList.contains("active") ? "hidden" : "auto";
    });

    // ===== clique nos links =====
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove a classe active de todos os links
            navLinks.forEach(l => l.classList.remove("active"));

            // Adiciona no link clicado
            link.classList.add("active");

            // Fecha o menu (mobile)
            toggleBtn.classList.remove("active");
            nav.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });

    // ===== definir active pela URL =====
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (currentPath.includes(linkPath)) {
            link.classList.add("active");
        }
    });
}