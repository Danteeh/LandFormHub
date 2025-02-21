function loadForm() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<iframe src="../pages/Formulario.html"></iframe>';
  }

function showPerformance() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<p>Aquí se mostrará el rendimiento del usuario.</p>';
  }

function showGeneratedForms() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<p>Aquí se mostrarán los formularios generados.</p>';
  }

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
  }