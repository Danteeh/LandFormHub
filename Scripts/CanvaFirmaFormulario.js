// CanvaFirmaFormulario.js
let canvas, ctx, isDrawing = false;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("signature-pad");
  ctx = canvas.getContext("2d");

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // mouse
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // touch
  canvas.addEventListener("touchstart", startDrawing, { passive: false });
  canvas.addEventListener("touchmove", draw, { passive: false });
  canvas.addEventListener("touchend", stopDrawing);
});

function openSignatureModal() {
  clearSignature();
  const modal = document.getElementById("signature-modal");
  modal.style.display = "flex";
  // center (flex)
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
}

function startDrawing(event) {
  event.preventDefault();
  isDrawing = true;
  const { x, y } = getEventCoords(event);
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function draw(event) {
  if (!isDrawing) return;
  event.preventDefault();
  const { x, y } = getEventCoords(event);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

function clearSignature() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  const signatureImage = canvas.toDataURL("image/png");
  const img = document.getElementById("signature-image");
  const placeholder = document.getElementById("signature-placeholder");

  if (img) {
    img.src = signatureImage;
    img.style.display = "block";
    img.style.width = "200px";
    img.style.height = "70px";
    img.style.objectFit = "contain";
  }
  if (placeholder) placeholder.style.display = "none";

  closeSignatureModal();
}

function closeSignatureModal() {
  const modal = document.getElementById("signature-modal");
  modal.style.display = "none";
  clearSignature();
}

function getEventCoords(event) {
  const rect = canvas.getBoundingClientRect();
  if (event.touches && event.touches[0]) {
    return {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top
    };
  }
  return {
    x: event.offsetX,
    y: event.offsetY
  };
}
