let canvas, ctx, isDrawing = false;
        
function openSignatureModal() {
    document.getElementById("signature-modal").style.display = "flex";
    canvas = document.getElementById("signature-pad");
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
}

function startDrawing(event) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function draw(event) {
    if (!isDrawing) return;
    ctx.lineTo(event.offsetX, event.offsetY);
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