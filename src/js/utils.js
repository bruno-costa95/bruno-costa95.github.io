// Identify active page
////////////////////////
export function getPage() {
    return window.location.pathname.split('/').pop()
}

// Identify device width
////////////////////////
const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024
}

export function getDeviceState() {
    const width = window.innerWidth

    return {
        width,
        isMobile: width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.tablet
    }
}