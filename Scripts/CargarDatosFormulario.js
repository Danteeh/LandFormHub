
function cargarDatosFormulario(jsonData) {
    const datos = jsonData[0];

    document.getElementById('fecha').value = datos.Fecha || '';
    document.getElementById('localidad').value = datos.Localidad || '';
    document.getElementById('barrio').value = datos.Barrio || '';
    document.getElementById('id_diseno').value = datos.PDF || '';
    document.getElementById('Nombre').value = datos.Predio["Nombre del Propietario"] || '';
    document.getElementById('Telefono').value = datos.Predio.Teléfono || '';
    document.getElementById('Correo').value = datos.Predio["Correo electrónico"] || '';
    document.getElementById('Direccion').value = datos.Predio.Dirección || '';
// Descripción del Predio
const descripcionTextarea = document.getElementById('descripción_Area');
const descripcionCompleta = `
Descripción del Predio: ${datos["Descripción del Predio"] || ''}

Estado del Predio:
- Piso 4: Material: ${datos["Estado del Predio"]["Piso 4"].Material || ''}, Estado del vidrio: ${datos["Estado del Predio"]["Piso 4"]["Estado del vidrio"] || ''}
- Piso 3: Material: ${datos["Estado del Predio"]["Piso 3"].Material || ''}, Estado del vidrio: ${datos["Estado del Predio"]["Piso 3"]["Estado del vidrio"] || ''}
- Piso: Material: ${datos["Estado del Predio"]["Piso"].Material || ''}, Estado del vidrio: ${datos["Estado del Predio"]["Piso"]["Estado del vidrio"] || ''}
- Cerramiento: ${datos["Estado del Predio"]["Cerramiento"] || ''}
- Daños: ${datos["Estado del Predio"]["Daños"] || ''}

Evaluación General: ${datos["Evaluación General"] || ''}

Consolidado de Descripción: ${datos["Consolidado de Descripción"] || ''}
`;

descripcionTextarea.value = descripcionCompleta.trim();
    const servicios = ['Agua', 'Alcantarillado', 'Teléfonos', 'Gas', 'TICS', 'Licencia de construcción'];
    servicios.forEach(servicio => {
        const disponible = datos["Servicios Disponibles"].includes(servicio);
        const checkboxes = document.querySelectorAll(`tr:has(td:contains('${servicio}')) input[type=checkbox]`);
        if (disponible && checkboxes.length >= 2) {
            checkboxes[0].checked = true;  // Marca 'Sí'
        } else if (!disponible && checkboxes.length >= 2) {
            checkboxes[1].checked = true;  // Marca 'No'
        }
    });

    // Uso del predio
    const usos = datos["Uso del Predio"] || {};
    Object.keys(usos).forEach(tipo => {
        const isChecked = usos[tipo] === "Sí";
        const checkbox = document.querySelector(`tr:has(td:contains('${tipo}')) input[type=checkbox]`);
        if (checkbox) {
            checkbox.checked = isChecked;
        }
    });

    console.log('Los datos se han cargado correctamente.');
}

function leerArchivoJSON(event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
            try {
                const datos = JSON.parse(e.target.result);
                cargarDatosFormulario(datos);
            } catch (error) {
                console.error('Error al analizar el archivo JSON:', error);
            }
        };
        lector.readAsText(archivo);
    }
}

const inputArchivo = document.getElementById('inputCargaArchivo');
inputArchivo.addEventListener('change', leerArchivoJSON);
