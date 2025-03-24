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

        // Convertir los <textarea> en texto antes de la captura
        document.querySelectorAll("textarea").forEach(textarea => {
            let text = textarea.value;
            let span = document.createElement("span");
            span.textContent = text;
            span.style.whiteSpace = "pre-wrap"; // Mantiene saltos de línea y espacios
            span.style.display = "block"; // Para mantener la estructura del diseño
            textarea.parentNode.replaceChild(span, textarea); // Reemplaza el textarea
        });

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

            // Restaurar los textarea después de generar el PDF
            document.querySelectorAll("span").forEach(span => {
                let textarea = document.createElement("textarea");
                textarea.value = span.textContent;
                textarea.style.width = "100%"; // Mantiene el tamaño original
                textarea.style.resize = "vertical"; // Permite redimensionar
                span.parentNode.replaceChild(textarea, span);
            });

        }).catch(error => {
            console.error("Error al generar el PDF con html2canvas:", error);
            if (generateButton) generateButton.style.display = 'block';
        });
    });
});
