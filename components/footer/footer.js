export async function loadFooter() {
    const footerContainer = document.getElementById("footer");

    if (!footerContainer) return;

    try {
        const res = await fetch("components/footer/footer.html");

        if (!res.ok) throw new Error(`Failed to load footer HTML: ${res.status}`);

        const data = await res.text();
        footerContainer.innerHTML = data;

    } catch (error) {
        console.error("Error loading the footer component:", error);
    }
}
