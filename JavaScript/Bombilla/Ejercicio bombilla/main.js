// Obtener los elementos
const bombilla = document.getElementById("bombilla");
const boton = document.getElementById("boton");
const controlBrillo = document.getElementById("controlBrillo");
const slider = document.getElementById("brillo");

// Estado inicial
let encendida = false;

// Función para encender/apagar la bombilla
function toggleBombilla() {
  encendida = !encendida;

  if (encendida) {
    bombilla.src = "on.jpg";
    boton.src = "bon.jpg";
    controlBrillo.classList.add("mostrar"); // Muestra la barra
  } else {
    bombilla.src = "off.jpg";
    boton.src = "boff.jpg";
    controlBrillo.classList.remove("mostrar"); // Oculta la barra
    bombilla.style.filter = "brightness(100%)"; // Restaura brillo
    slider.value = 100;
  }
}

// Ajustar brillo solo si está encendida
slider.addEventListener("input", () => {
  if (encendida) {
    bombilla.style.filter = `brightness(${slider.value}%)`; // <-- usa backticks
  }
});

// Permite que el HTML pueda llamar a toggleBombilla()
window.toggleBombilla = toggleBombilla;
