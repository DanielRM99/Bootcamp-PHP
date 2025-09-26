/* EJERCICIO
1. Crea una función arrow function que retorne tu nombre y tus apellidos e
imprímelos por pantalla desde fuera de la función

2. Crea una función con nombre y sin return. Pásale un tipo de dato boolean y
dentro de la función imprime el valor el valor que hemos pasado por los parámetros.

3. Crea una función que reciba parámetros infinitos, haz la llamada con los valores
1,2,3,4,5 y muestra dichos mediante un forEach. */

// EJERCICIO 1 
// /* let nombre2 = prompt("Escribe tu nombre");

// const nombre1  = (nombre) => {
//     console.log(nombre)
// }
// nombre1(nombre2); 

// EJERCICIO 2

// function prueba(nombre) {
//     console.log(nombre);
// }

// prueba(true);

// EJERCICIO 3 

// function numeros(...nums) {
//         nums.forEach(num => {
//             console.log(num);        
// });
// }
// numeros(1, 2, 3, 4 ,5);

// ________________________________________________________________________________
// EJERCICIO 4



// 1. A partir de la siguiente instrucción que genera un número aleatorio
// (Math.round(Math.random())); que genera un número aleatorio 0 o 1.
// Haz una función con return, invocala y muestra por consola cara si el valor es 1 y
// cruz si el valor es 0.

// function aleatorio(num) { 
//     let moneda 
//     if (num === 1){
//         moneda = "cara"
//     } else {
//         moneda = "cruz"
//     }
//     return moneda
// }

// console.log(aleatorio(Math.round(Math.random())));
// Operador ternario, luego que te lo haga con dos returns y que te lo haga con un solo return.
// function aleatorio() {
//     let moneda = Math.round(Math.random())
//     if (moneda === 1) {
//         console.log("Cara");
//     } else {
//         console.log("Cruz");
//     }
// }
// aleatorio();

// function aleatorio() {
//     let moneda = Math.round(Math.random());
//     console.log(moneda === 1 ? "Cara" : "Cruz")
// }

// function aleatorio2() {
//     return Math.round(Math.random() === 1 ? "Cara" : "Cruz")
// }

// const aleatorio3 = () => Math.round(Math.random() === 1) ? "Cara" : "Cruz";
// _______________________________________________________________________________

// EJERCICIO



// 1. Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado
// mediante a return. Finalmente muéstralos por pantalla

// 2. Crea una función y escribe tu nombre completo en 3 parámetros: nombre,
// apellido1, apellido2 y concaténalos y finalmente muéstralos por pantalla

// 3. Crea una función que acepte dos números y devuelva el número mayor
// function numeros(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(numeros(1, 2, 3));

// ___________________________________________________
// function nombreCompleto(nombre, apellido1, apellido2) {
//     return nombre + " " + apellido1 + " " + apellido2;
// }
// console.log(nombreCompleto("Erick", "Gay", "Masgey"));
function numeros(num1, num2) {
    if(num1 > num2){
        console.log("Es el número mayor")
    } else{
        console.log("Es el número pequeño")
    }
}
numeros(7,5);






