function toggleStatus() {
    const indicator = document.getElementById("ultra-status");
    if (indicator.classList.contains("on")) {
        indicator.classList.remove("on");
        indicator.classList.add("off");
        indicator.textContent = "OFF";
    } else {
        indicator.classList.remove("off");
        indicator.classList.add("on");
        indicator.textContent = "ON";
    }
}


// Akses kamera lokal
async function initCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById("camera-stream");
        video.srcObject = stream;
        document.getElementById("cam-status").textContent = "Terhubung";
    } catch (err) {
        document.getElementById("cam-status").textContent = "Gagal akses kamera";
        console.error("Error camera:", err);
    }
}


window.onload = initCamera;