import cookiesHTML from "./cookies.html?raw"

export function initCookies() {
    const cookiesContainer = document.getElementById('cookies')

    if (!cookiesContainer) return

    cookiesContainer.innerHTML = cookiesHTML

    const banner = document.getElementById("cookies")
    const acceptBtn = document.getElementById("accept-cookies")
    const rejectBtn = document.getElementById("reject-cookies")

    if (!banner) return

    const cookieChoice = localStorage.getItem("cookie-consent")

    if (cookieChoice === null) {
        banner.classList.remove("cookies-hidden")
    }

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        banner.classList.add("cookies-hidden")
    }

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected")
        banner.classList.add("cookies-hidden")
    }

    acceptBtn?.addEventListener("click", handleAccept, { once: true })
    rejectBtn?.addEventListener("click", handleReject, { once: true })
}