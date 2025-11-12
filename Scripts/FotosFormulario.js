function triggerUpload(inputId) {
    document.getElementById(inputId).click();
}

function previewImage(event, id) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById(`${id}-preview`);
        preview.innerHTML = `<img src="${reader.result}" alt="Imagen">`;
    };
    reader.readAsDataURL(event.target.files[0]);
}
