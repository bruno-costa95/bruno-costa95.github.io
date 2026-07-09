import headerHTML from "./header.html?raw"

export function loadHeader() {
    const headerContainer = document.getElementById("header");
    
    if (!headerContainer) return

    headerContainer.innerHTML = headerHTML
    
    const toggleBtn = document.querySelector(".toggle-btn")
    const toggleImg = document.querySelector(".toggle-img")
    const nav = document.querySelector(".nav")
    const navLinks = document.querySelectorAll(".nav-list a")

    if (!toggleBtn || !nav) return

    // MENU
    ///////////////////////////////
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active")
        toggleImg.classList.toggle("active")
        nav.classList.toggle("active")

        document.body.style.overflow =
            nav.classList.contains("active") ? "hidden" : "auto"
    })

    // LINK CLICK
    /////////////////////////////// 
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"))
            link.classList.add("active")

            toggleBtn.classList.remove("active")
            nav.classList.remove("active")
            document.body.style.overflow = "auto";
        });
    });

    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath && linkPath !== "/" && currentPath.includes(linkPath)) {
            link.classList.add("active");
        }
    });
}
