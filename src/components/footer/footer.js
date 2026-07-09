import footerHTML from "./footer.html?raw"

export function loadFooter() {
    const footerContainer = document.getElementById("footer")

    if (!footerContainer) return

    footerContainer.innerHTML = footerHTML
}
