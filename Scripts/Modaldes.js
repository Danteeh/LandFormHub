document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("descripcionTextarea");

    textarea.addEventListener("click", () => {
        document.getElementById("modalDescripcion").style.display = "flex";
    });
});

function cerrarModal() {
    document.getElementById("modalDescripcion").style.display = "none";
}

function generarCamposPisos() {
    const numPisos = parseInt(document.getElementById("numPisos").value, 10);
    const camposContainer = document.getElementById("camposPisos");
    camposContainer.innerHTML = ""; // Limpiar antes de generar

    // Preguntas para piso 0 (calle)
    const piso0 = document.createElement("div");
    piso0.innerHTML = `
  <h4>Piso 0 (calle)</h4>
  <label>Presenta cerramiento, Tipo:
    <select name="cerramiento_p0">
      <option value="">Seleccione una opción</option>
      <option>No presenta</option>
      <option>Reja Metalica</option>
      <option>Talanquera</option>
      <option>Delineadores</option>
      <option>Estructura metalica</option>
      <option>cerca viva</option>
      <option>En rejas y alambre</option>
    </select>
  </label><br>

  <label>En condiciones:
    <select name="CondicionesCerramiento_p0">
      <option value="">Seleccione una opción</option>
      <option>Buena</option>
      <option>Regular</option>
      <option>Mala</option>
      <option>Deteriorada</option>
      <option>Oxidada</option>
    </select>
  </label><br>

  <label>Permite visibilidad al interior del cercado:
    <select name="Visibilidad_cercado_p0">
      <option value="">Seleccione una opción</option>
      <option>Si</option>
      <option>No</option>
    </select>
  </label><br>

  <label>Con anden en:
    <select name="Anden_Material_p0">
      <option value="">Seleccione una opción</option>
      <option>Concreto</option>
      <option>Adoquin</option>
      <option>Baldosa</option>
      <option>Afirmado</option>
    </select>
  </label><br>

  <label>y se encuentra en:
    <select name="Bordillo_Anden_Material_p0">
      <option value="">Seleccione una opción</option>
      <option>Con bordillo en concreto</option>
      <option>Sin bordillo en concreto</option>
    </select>
  </label><br>

    <label>Cuenta con demarcacion el bordillo:
    <select name="Binario_bordillo_p0">
      <option value="">Seleccione una opción</option>
      <option>Si</option>
      <option>No</option>
    </select>
  </label><br>

    <label>El estado del anden en general es:
    <select name="Estado_General_anden_p0">
      <option value="">Seleccione una opción</option>
      <option>Buena</option>
      <option>Regular</option>
      <option>Mala</option>
      <option>Deteriorada</option>
      <option>Presenta fisura</option>
      <option>se evidencia perdida de material</option>
    </select>
  </label><br>

   <label>El anden cuenta con secciones de:
    <select name="Secciones_anden_p0">
      <option value="">Seleccione una opción</option>
      <option>N/A</option>
      <option>Zona blanda</option>
      <option>Zona verde</option>
      <option>Zona en adoquin</option>
      <option>Zona en afirmado</option>
    </select>
  </label><br>

  <label>Algunas secciones del anden presentan condiciones de:
    <select name="Secciones_Condicion_anden_p0">
      <option value="">Seleccione una opción</option>
      <option>N/A</option>
      <option>Empozamientos</option>
      <option>Hundimiento de material de revestimiento</option>
      <option>Desportillamientos generalizados</option>
    </select>
  </label><br>

   <label>Se evidencia en el anden elementos urbanisticos tales como:
    <select name="Elementos_urbanos_p0">
      <option value="">Seleccione una opción</option>
      <option>N/A</option>
      <option>Caneca metalica de residuos sólidos</option>
      <option>Jardineras de ladrillo prensado</option>
      <option>Contenedor de basura</option>
      <option>Bolardos</option>
    </select>
  </label><br>


  <label>Presencia de plantas o jardin:
  <select name="Jardin_p0">
    <option value="">Seleccione una opción</option>
    <option>N/A</option>
    <option>Plantas</option>
    <option>Jardin</option>
  </select>
</label><br>

<label>Condiciones de las plantas evidenciadas:
<select name="Condiciones_Jardin_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Buena</option>
  <option>Mala</option>
  <option>Regular</option>
</select>
</label><br>


<label>Se evidencia presencia de elementos arboreos:
<select name="Arboreos_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Buena</option>
  <option>Mala</option>
  <option>Regular</option>
</select>
</label><br>

<label>Cuenta con acceso vehicular en tipo:
<select name="Acceso_Vehicular_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Reja</option>
  <option>Puerta metalica</option>
  <option>Talanquera</option>
</select>
</label><br>


<label>Rampa en material:
<select name="Rampa_Material_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Asfalto</option>
  <option>Rigido</option>
  <option>Adoquin</option>
  <option>Afirmado</option>
</select>
</label><br>

<label>Condiciones de la rampa:
<select name="Condiciones_Rampa_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Buena</option>
  <option>Regular</option>
  <option>Mala</option>
  <option>Presenta fisuras y desportillamiento</option>
  <option>Desgaste generalizado por uso</option>
</select>
</label><br>


<label> Sardinel respecto a la rampa en condiciones:
<select name="Sardinel_Condiciones_p0">
  <option value="">Seleccione una opción</option>
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Buena</option>
  <option>Regular</option>
  <option>Mala</option>
  <option>Presenta fisuras y desportillamiento</option>
  <option>Desgaste generalizado por uso</option>
</select>
</label><br>

<label>Con varanda de acceso:
<select name="Varanda_acceso_p0">
  <option value="">Seleccione una opción</option>
  <option>N/A</option>
  <option>Buena</option>
  <option>Regular</option>
  <option>Mala</option>
</select>
</label><br>

`;
    camposContainer.appendChild(piso0);


    if (numPisos >= 1) {
        // Preguntas para piso 1
        const piso1 = document.createElement("div");
        piso1.innerHTML = `<h4>Piso 1</h4><br>
        <label>Tipo de uso:
          <select name="Tipo_Uso_p1">
            <option value="">Seleccione una opción</option>
            <option>Residencial</option>
            <option>Comercial</option>
            <option>Industrial</option>
            <option>Institucional</option>
            <option>Recreacional</option>
            <option>Bien de interés cultural</option>
            <option>Mixto</option>
            <option>Otro</option>
          </select>
          </label><br>

          <label>Tipo de fachada:
          <select name="Tipo_Fachada_p1">
            <option value="">Seleccione una opción</option>
            <option>Residencial</option>
            <option>Ladrillo Prensado</option>
            <option>Tableta</option>
            <option>Estucada</option>
            <option>Bloque</option>
            <option>Estuco con pintura</option>
            <option>Con pañete</option>
            <option>Sin pañete</option>
          </select>
          </label><br>
          
          <label>Estado de la fachada:
          <select name="Estado_Fachada_p1">
            <option value="">Seleccione una opción</option>
            <option>Residencial</option>
            <option>Ladrillo Prensado</option>
            <option>Tableta</option>
            <option>Estucada</option>
            <option>Bloque</option>
            <option>Estuco con pintura</option>
            <option>Con pañete</option>
            <option>Sin pañete</option>
          </select>
          </label><br>

          <label>Presenta:
          <select name="Presenta_Fachada_p1">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Uso y desgaste natural por el tiempo de exposición al ambiente</option>
            <option>Grietas transversales expuestas</option>
            <option>Grietas longitudinales expuestas</option>
            <option>Grietas con uso y desgaste natural por el tiempo</option>
          </select>
          </label><br>


          <label>Puertas de acceso:
          <select name="Puertas_Acceso_p1">
            <option value="">Seleccione una opción</option>
            <option>Peatonal</option>
            <option>Vehicular</option>
            <option>Peatonal y vehicular</option>
          </select>
          </label><br>

          <label>Material de la puerta:
          <select name="Material_Puerta_p1">
            <option value="">Seleccione una opción</option>
            <option>Metal</option>
            <option>Madera</option>
            <option>Maciso</option>
            <option>Seguridad</option>
            <option>Reja</option>
          </select>
          </label><br>

          <label>Estado:
          <select name="Estado_Puerta_p1">
            <option value="">Seleccione una opción</option>
            <option>Buena</option>
            <option>Mala</option>
            <option>Regular</option>
          </select>
          </label><br>

          <label>Estado ventanas:
          <select name="Estado_ventanas_p1">
            <option value="">Seleccione una opción</option>
            <option>Buena</option>
            <option>Mala</option>
            <option>Regular</option>
          </select>
          </label><br>
          
         <label>Estado vidrios:
          <select name="Estado_vidrios_p1">
            <option value="">Seleccione una opción</option>
            <option>N/A</>
            <option>Buena</option>
            <option>Mala</option>
            <option>Regular</option>
          </select>
          </label><br>

          <label>Columnas:
          <select name="Estado_Columnas_p1">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>En concreto</option>
            <option>En madera</option>
          </select>
          </label><br>

          <label>Ducto de ventinalcion:
          <select name="Ducto_p1">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Material metalico</option>
            <option>Tubo pvc</option>
            <option>rejilla</option>
          </select>
          </label><br>
        `;
        camposContainer.appendChild(piso1);
    }

    // Preguntas repetidas para pisos 2 en adelante
    for (let i = 2; i <= numPisos; i++) {
        const pisoN = document.createElement("div");
        pisoN.innerHTML = `<h4>Piso ${i}</h4><br>
         <label>Balcon:
          <select name="Balcon_p${i}">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>con</option>
          </select> 
          </label><br>

        <label>Material ventanas:
          <select name="Material_Ventanas_p${i}">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Metal</option>
            <option>Madera</option>
          </select>
          </label><br>

         <label>Estado ventanas:
          <select name="Estado_ventanas_p${i}">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Bueno</option>
            <option>Regular</option>
            <option>Mala</option>
          </select>
          </label><br>
          
         <label>Estado vidrio:
          <select name="Estado_vidrio_p${i}">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Buen Estado</option>
            <option>Vencido</option>
            <option>Roto</option>
          </select>
          </label><br>
          
          <label>Terraza:
          <select name="Terraza_p${i}">
            <option value="">Seleccione una opción</option>
            <option>N/A</option>
            <option>Si</option>
          </select>
          </label><br>         
        `;
        camposContainer.appendChild(pisoN);
    }
}

function generarTextoDescripcion() {
  let texto = "";

  const limpiar = (valor) => valor && valor !== "Seleccione una opción" && valor !== "N/A";

  // PISO 0
  const cerramiento = document.querySelector("[name='cerramiento_p0']").value;
  const condicionesCerramiento = document.querySelector("[name='CondicionesCerramiento_p0']").value;
  const visibilidad = document.querySelector("[name='Visibilidad_cercado_p0']").value;
  const andenMaterial = document.querySelector("[name='Anden_Material_p0']").value;
  const bordillo = document.querySelector("[name='Bordillo_Anden_Material_p0']").value;
  const demarcacion = document.querySelector("[name='Binario_bordillo_p0']").value;
  const estadoAnden = document.querySelector("[name='Estado_General_anden_p0']").value;
  const secciones = document.querySelector("[name='Secciones_anden_p0']").value;
  const condicionesSecciones = document.querySelector("[name='Secciones_Condicion_anden_p0']").value;
  const elementosUrbanos = document.querySelector("[name='Elementos_urbanos_p0']").value;
  const jardin = document.querySelector("[name='Jardin_p0']").value;
  const condicionJardin = document.querySelector("[name='Condiciones_Jardin_p0']").value;
  const arboreos = document.querySelector("[name='Arboreos_p0']").value;
  const accesoVehicular = document.querySelector("[name='Acceso_Vehicular_p0']").value;
  const rampa = document.querySelector("[name='Rampa_Material_p0']").value;
  const condicionesRampa = document.querySelector("[name='Condiciones_Rampa_p0']").value;
  const sardinel = document.querySelector("[name='Sardinel_Condiciones_p0']").value;
  const varanda = document.querySelector("[name='Varanda_acceso_p0']").value;

  texto += "El predio: ";
  if (cerramiento === "No presenta") {
    texto += "No presenta cerramiento. ";
  } else if (limpiar(cerramiento)) {
    texto += `Presenta cerramiento de tipo ${cerramiento}`;
    if (limpiar(condicionesCerramiento)) texto += `, en estado ${condicionesCerramiento}`;
    if (limpiar(visibilidad)) texto += `, con visibilidad al interior: ${visibilidad}`;
    texto += ". ";
  }

  if (limpiar(andenMaterial)) texto += `Andén de material ${andenMaterial}`;
  if (limpiar(bordillo)) texto += `, con bordillo tipo ${bordillo}`;
  if (limpiar(demarcacion)) texto += ` y demarcación ${demarcacion}`;
  if (limpiar(estadoAnden)) texto += `. Estado general del andén: ${estadoAnden}`;
  if (limpiar(secciones)) texto += `. Secciones: ${secciones}`;
  if (limpiar(condicionesSecciones)) texto += `. Condiciones de las secciones: ${condicionesSecciones}`;
  if (limpiar(elementosUrbanos)) texto += `. Elementos urbanísticos: ${elementosUrbanos}`;
  if (limpiar(jardin)) texto += `. Jardín en estado ${condicionJardin}`;
  if (limpiar(arboreos)) texto += `. Elementos arbóreos en estado ${arboreos}`;
  if (limpiar(accesoVehicular)) texto += `. Acceso vehicular tipo ${accesoVehicular}`;
  if (limpiar(rampa)) texto += `. Rampa de material ${rampa}`;
  if (limpiar(condicionesRampa)) texto += ` en estado ${condicionesRampa}`;
  if (limpiar(sardinel)) texto += `. Sardinel en estado ${sardinel}`;
  if (limpiar(varanda)) texto += `. Veranda de acceso en estado ${varanda}`;
  texto += "\n\n";

  // PISO 1
  if (document.querySelector("[name='Tipo_Uso_p1']")) {
    const uso = document.querySelector("[name='Tipo_Uso_p1']").value;
    const fachada = document.querySelector("[name='Tipo_Fachada_p1']").value;
    const estadoFachada = document.querySelector("[name='Estado_Fachada_p1']").value;
    const presentaFachada = document.querySelector("[name='Presenta_Fachada_p1']").value;
    const puertas = document.querySelector("[name='Puertas_Acceso_p1']").value;
    const materialPuerta = document.querySelector("[name='Material_Puerta_p1']").value;
    const estadoPuerta = document.querySelector("[name='Estado_Puerta_p1']").value;
    const estadoVentanas = document.querySelector("[name='Estado_ventanas_p1']").value;
    const estadoVidrios = document.querySelector("[name='Estado_vidrios_p1']").value;
    const columnas = document.querySelector("[name='Estado_Columnas_p1']").value;
    const ducto = document.querySelector("[name='Ducto_p1']").value;

    texto += "El piso 1 tiene: ";
    if (limpiar(uso)) texto += `uso destinado a ${uso}. `;
    if (limpiar(fachada)) texto += `Fachada de tipo ${fachada} en estado ${estadoFachada}. `;
    if (limpiar(presentaFachada)) texto += `Presenta ${presentaFachada}. `;
    texto += ". ";

    if (limpiar(puertas)) texto += `Puertas de acceso de material ${materialPuerta}, en estado ${estadoPuerta}. `;
    if (limpiar(estadoVentanas)) texto += `Ventanas en estado ${estadoVentanas}`;
    if (limpiar(estadoVidrios)) texto += `, vidrios en estado ${estadoVidrios}. `;
    if (limpiar(columnas)) texto += `Columnas en estado ${columnas}. `;
    if (limpiar(ducto)) texto += `Ducto de ventilación de tipo ${ducto}. `;
    texto += "\n\n";
  }

  // PISOS 2 EN ADELANTE
  const numPisos = parseInt(document.getElementById("numPisos").value, 10);
  for (let i = 2; i <= numPisos; i++) {
    const balcon = document.querySelector(`[name='Balcon_p${i}']`).value;
    const matVentana = document.querySelector(`[name='Material_Ventanas_p${i}']`).value;
    const estadoVent = document.querySelector(`[name='Estado_ventanas_p${i}']`).value;
    const estadoVid = document.querySelector(`[name='Estado_vidrio_p${i}']`).value;
    const terraza = document.querySelector(`[name='Terraza_p${i}']`).value;

    let pisoTexto = `El piso ${i} tiene: `;

    if (limpiar(balcon)) pisoTexto += `un balcón. `;
    if (limpiar(matVentana)) pisoTexto += `Ventanas de material ${matVentana} en estado ${estadoVent}. `;
    if (limpiar(estadoVid)) pisoTexto += `Vidrios en estado ${estadoVid}. `;
    if (limpiar(terraza)) pisoTexto += `Terraza en estado ${terraza}. `;
    
    if (pisoTexto !== `El piso ${i} tiene: `) {
      texto += pisoTexto + "\n\n";
    }
  }

  // Mostrar el resultado en el textarea
  document.getElementById("descripcionTextarea").value = texto.trim();
  document.getElementById("modalDescripcion").style.display = "none";
}

// Mostrar el modal al hacer clic en el textarea de descripción
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea[placeholder='Ingrese la descripción aquí...']");
    textarea.addEventListener("click", () => {
        document.getElementById("modalDescripcion").style.display = "block";
    });
});


