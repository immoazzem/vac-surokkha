export const initGoogleAnalytics = (config) => {
    const script_orig = document.createElement("script");
    script_orig.async = true;
    script_orig.src = "https://www.googletagmanager.com/gtag/js?id=G-X6Q20VXR5J";
    document.head.appendChild(script_orig);
    const script = document.createElement("script");
    script.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-X6Q20VXR5J');";
    document.head.appendChild(script);
}