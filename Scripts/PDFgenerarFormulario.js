// PDFgenerarFormulario.js
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generatePDF');
    generateBtn.addEventListener('click', generatePDF);
  });
  
  function updateOwnerNameFromInput() {
    const input = document.getElementById('Nombre');
    const ownerNameEl = document.getElementById('owner-name');
    if (ownerNameEl && input) {
      ownerNameEl.textContent = input.value.trim() || 'Nombre de la persona';
    }
  }
  
  function triggerUpload(inputId) {
    document.getElementById(inputId).click();
  }
  
  function previewImage(event, id) {
    const reader = new FileReader();
    reader.onload = function() {
      const preview = document.getElementById(`${id}-preview`);
      preview.innerHTML = `<img src="${reader.result}" alt="Imagen" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:6px;">`;
    };
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  async function generatePDF() {
    const generateButton = document.getElementById('generatePDF');
    const element = document.querySelector('.container');
    if (!element) return alert('No se encontró el contenido a exportar.');
  
    updateOwnerNameFromInput();

    const signatureModal = document.getElementById('signature-modal');
    const prevModalDisplay = signatureModal ? signatureModal.style.display : null;
    if (signatureModal) signatureModal.style.display = 'none';
  

    if (generateButton) generateButton.style.visibility = 'hidden';

    const textareas = Array.from(document.querySelectorAll('textarea'));
    const tempSpans = [];
    textareas.forEach(tx => {
      const span = document.createElement('div');
      span.textContent = tx.value;
      span.style.whiteSpace = 'pre-wrap';
      span.style.minHeight = tx.offsetHeight + 'px';
      span.dataset.temp = 'true';
      tx.parentNode.replaceChild(span, tx);
      tempSpans.push({ span, original: tx });
    });
  
    try {

      const canvas = await html2canvas(element, {
        scale: 1,          
        useCORS: true,
        allowTaint: true,
        logging: false
      });
  

      const imgData = canvas.toDataURL('image/jpeg', 0.7);

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true 
      });
  
      // Ajustar imagen al tamaño de página
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let drawWidth = pageWidth;
      let drawHeight = (canvas.height * pageWidth) / canvas.width;
  
      if (drawHeight > pageHeight) {
        drawHeight = pageHeight;
        drawWidth = (canvas.width * pageHeight) / canvas.height;
      }
  
      const xOffset = (pageWidth - drawWidth) / 2;
      const yOffset = (pageHeight - drawHeight) / 2;
  
      pdf.addImage(imgData, 'JPEG', xOffset, yOffset, drawWidth, drawHeight);
  

      const idInput = document.getElementById('id_diseno');
      const filename = (idInput && idInput.value.trim()) ? idInput.value.trim() + '.pdf' : 'formulario.pdf';
      pdf.save(filename);
  
    } catch (err) {
      console.error('Error generando PDF:', err);
      alert('Ocurrió un error al generar el PDF. Revisa la consola.');
    } finally {
      tempSpans.forEach(({ span, original }) => {
        const textarea = document.createElement('textarea');
        textarea.value = span.textContent;
        textarea.style.width = '100%';
        textarea.style.resize = 'vertical';
        span.parentNode.replaceChild(textarea, span);
      });
      if (generateButton) generateButton.style.visibility = 'visible';
      if (signatureModal && prevModalDisplay) signatureModal.style.display = prevModalDisplay;
    }
  }
  