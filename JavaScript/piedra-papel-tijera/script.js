let juego = ['piedra', 'papel', 'tijeras'];
let escoger = prompt("Escoge una opción: Piedra - Papel -Tijeras");
let maquina = Math.floor(Math.random() *3);
let jugadaMaquina = juego[maquina];
console.log("Tú elegiste: " + escoger);
console.log("La máquina eligió: " + jugadaMaquina);
if (escoger === jugadaMaquina) {
    console.log("¡Es un empate!");
} else if (
    (escoger === "piedra" && jugadaMaquina === "tijeras") ||
    (escoger === "papel" && jugadaMaquina === "piedra") ||
    (escoger === "tijeras" && jugadaMaquina === "papel")
) {
    console.log("¡Ganaste! 🥳")
} else {
    console.log("Perdiste 🥹")
}