document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generatePDF').addEventListener('click', function () {
        const generateButton = document.getElementById('generatePDF');
        const element = document.querySelector('.container'); // Contenedor del formulario
        const idInput = document.getElementById('id_diseno'); // Campo de ID de diseño

        if (!element) {
            console.error("No se encontró el elemento con la clase '.container'");
            return;
        }

        // Obtener el valor del input "ID diseño"
        let formID = idInput ? idInput.value.trim() : "";
        if (!formID) {
            formID = "formulario"; // Nombre por defecto si está vacío
        }

        // Ocultar botón antes de generar el PDF
        if (generateButton) generateButton.style.display = 'none';

        html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;

            // Obtener tamaño del contenido en mm
            const imgWidth = (canvas.width * 25.4) / 96;  
            const imgHeight = (canvas.height * 25.4) / 96;

            // Crear PDF con dimensiones ajustadas al contenido
            const doc = new jsPDF({
                orientation: imgWidth > imgHeight ? 'l' : 'p',
                unit: 'mm',
                format: [imgWidth, imgHeight]
            });

            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            doc.save(`${formID}.pdf`); // Usa el valor del input como nombre del PDF

            // Restaurar la visibilidad del botón
            if (generateButton) generateButton.style.display = 'block';
        }).catch(error => {
            console.error("Error al generar el PDF con html2canvas:", error);
            if (generateButton) generateButton.style.display = 'block';
        });
    });
});
