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
// function numeros(num1, num2) {
//     if(num1 > num2){
//         console.log("Es el número mayor")
//     } else{
//         console.log("Es el número pequeño")
//     }
// }
// numeros(7,5);
// EJERCICIOS SWITCH

// 1. Realiza un switch case que muestre el mes del año cuando lo introduzcamos en
// formato numérico (1 al 12)
// let mes = 2;
// switch (mes) {
//     case 1: console.log("Enero"); break;
//     case 2: console.log("Febrero"); break;
//     case 3: console.log("Marzo"); break;
//     case 4: console.log("Abril"); break;
//     case 5: console.log("Mayo"); break;
//     case 6: console.log("Junio"); break;
//     case 7: console.log("Julio"); break;
//     case 8: console.log("Agosto"); break;
//     case 9: console.log("Septiembre"); break;
//     case 10: console.log("Octubre"); break;
//     case 11: console.log("Noviembre"); break;
//     case 12: console.log("Diciembre"); break;

//     default:
//         console.log("Se ha acabado el año.")
// }

// 2. Realiza un switch case en el que puedas introducir un número del uno al cinco en
// un string y lo transforme a un número

// let numero = "uno";
// switch (numero) {
//     case "uno": console.log(1); break;
//     case "dos": console.log(2); break;
//     case "tres": console.log(3); break;
//     case "cuatro": console.log(4); break;
//     case "cinco": console.log(5); break;
//     }
// EJERCICIOS MATH

// 1. Investiga como crear un número aleatorio (0 o 1) con el método random de
// Math.


// let numero = Math.floor(Math.random() * 2);
// console.log(numero);


// 2. Investiga como redondear el valor de Math.PI 3,1415… a la parte decimal 3.
// let numero = Math.floor((Math.PI))
// console.log(numero);













