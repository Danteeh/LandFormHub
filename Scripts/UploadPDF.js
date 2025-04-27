// AutocompletarFormulario.js

import jsPDF from 'jspdf';

// Función para cargar y procesar el archivo .txt
function cargarArchivo(event) {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = function(e) {
        const contenido = e.target.result;
        procesarContenido(contenido);
        alert('Archivo cargado correctamente. Procesando contenido...'); // ✅ Mensaje de éxito
    };
    lector.readAsText(archivo);
}

const datos = {};

// Función para procesar el contenido del archivo y completar el formulario
function procesarContenido(texto) {
    const lineas = texto.split('\n');

    lineas.forEach(linea => {
        const [clave, valor] = linea.split(':').map(item => item.trim());
        if (!valor) return;

        const claveFormateada = clave.toLowerCase().replace(/\s+/g, '_');
        datos[claveFormateada] = valor;

        const input = document.getElementById(claveFormateada);
        if (input) {
            input.value = valor;
        }
    });

    alert('Formulario completado con éxito. Ahora puedes generar el PDF.');
}

function generarPDF() {
    const doc = new jsPDF();
    let y = 10;

    for (const [clave, valor] of Object.entries(datos)) {
        doc.text(`${clave}: ${valor}`, 10, y);
        y += 10;
    }

    doc.save('Formulario_Completado.pdf');
}

// Asociar eventos a los elementos HTML existentes
const archivoInput = document.getElementById('archivoInput');
archivoInput.addEventListener('change', cargarArchivo);

const botonPDF = document.getElementById('generatePDF');
botonPDF.addEventListener('click', generarPDF);
