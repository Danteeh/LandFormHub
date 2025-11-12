// PDFgenerarFormulario.js
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generatePDF');
  if (generateBtn) generateBtn.addEventListener('click', generatePDF);
});

function updateOwnerNameFromInput() {
  const input = document.getElementById('Nombre');
  const ownerNameEl = document.getElementById('owner-name');
  if (ownerNameEl && input) {
    ownerNameEl.textContent = input.value.trim() || 'Nombre de la persona';
  }
}

function triggerUpload(inputId) {
  document.getElementById(inputId)?.click();
}

function previewImage(event, id) {
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById(`${id}-preview`);
    preview.innerHTML = `
      <img src="${reader.result}" 
           alt="Imagen" 
           style="max-width:100%; max-height:100%; object-fit:contain; border-radius:6px;">
    `;
  };
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
}

async function generatePDF() {
  const element = document.querySelector('.container');
  if (!element) return alert('No se encontró el contenido a exportar.');

  const generateButton = document.getElementById('generatePDF');
  if (generateButton) {
    generateButton.style.visibility = 'hidden'; // ocultar botón mientras se genera
  }

  try {
    console.log('Generando captura...');
    const canvas = await html2canvas(element, { scale: 1 }); // escala menor para reducir peso
    console.log('Canvas generado:', canvas.width, canvas.height);

    const imgData = canvas.toDataURL('image/jpeg', 0.7); // calidad menor para PDF más ligero
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);

    // Usamos el valor del input id_diseno como nombre de archivo
    const idDisenoInput = document.getElementById('id_diseno');
    let fileName = idDisenoInput?.value.trim();
    if (!fileName) fileName = 'formulario'; // valor por defecto si está vacío

    pdf.save(`${fileName}.pdf`);
    console.log('PDF generado correctamente con nombre:', fileName);

  } catch (err) {
    console.error('Error al generar el PDF:', err);
    alert('Ocurrió un error al generar el PDF. Revisa la consola.');
  } finally {
    if (generateButton) {
      generateButton.style.visibility = 'visible'; // restaurar visibilidad del botón
    }
  }
}
