let canvas, ctx, isDrawing = false;

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("signature-pad");
    ctx = canvas.getContext("2d");
    
    // Configuración de la firma
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Eventos de ratón
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    // Eventos táctiles
    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDrawing);
});

function openSignatureModal() {
    document.getElementById("signature-modal").style.display = "flex";
}

function startDrawing(event) {
    isDrawing = true;
    const { x, y } = getEventCoords(event);
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function draw(event) {
    if (!isDrawing) return;
    const { x, y } = getEventCoords(event);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
    const signatureImage = canvas.toDataURL();
    document.getElementById("signature-image").src = signatureImage;
    document.getElementById("signature-image").style.display = "block";
    document.getElementById("signature-placeholder").style.display = "none";
    closeSignatureModal();
}

function closeSignatureModal() {
    document.getElementById("signature-modal").style.display = "none";
}

// Función para obtener coordenadas, compatible con touch y mouse
function getEventCoords(event) {
    if (event.touches) {
        event = event.touches[0];
    }
    return {
        x: event.offsetX || event.clientX - canvas.getBoundingClientRect().left,
        y: event.offsetY || event.clientY - canvas.getBoundingClientRect().top
    };
}
