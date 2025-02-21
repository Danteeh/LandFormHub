function previewImage(event, previewId) {
    const input = event.target;
    const previewContainer = document.getElementById(`${previewId}-preview`);
    
    // Limpia cualquier vista previa anterior
    previewContainer.innerHTML = '';

    if (input.files && input.files[0]) {
        const file = input.files[0];

        // Verifica que el archivo sea una imagen válida
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
