export async function loadFooter() {
    const res = await fetch("components/footer/footer.html");
    const data = await res.text();

    document.getElementById("footer").innerHTML = data;
}