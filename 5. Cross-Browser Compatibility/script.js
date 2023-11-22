const browserInfo = document.getElementById('browser-info');

browserInfo.textContent = `You are using ${getBrowserName()} browser.`;

function getBrowserName() {
    const userAgent = window.navigator.userAgent;
    
    if (userAgent.includes("Chrome")) {
        return "Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Firefox";
    } else if (userAgent.includes("Safari")) {
        return "Safari";
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
        return "Internet Explorer";
    } else {
        return "an unknown browser";
    }
}
