// Comentario

// Variables

//var nombre
let nombre
//const NOMBRE = "Eduardo"

// Tipos de Datos

/*
String: String("" o '' o ``) o "hola" o 'hola' o `hola`
Number: Number() o 1 o 1.2
Booleano: Boolean('') true o false
Object: Object({}) ({}) {}
Arrays: Array() o Array.from({}) o []
Undefined 
Null
NaN 4 - "a" 
Promise 
Class POO 
Functions: 
function nombre (argumentos){
  return
}

const ENMAYUSCULAS = function(){}

nombre = argunmento => argumento * 2
nombre = (argunmento) => {
  return argumento * 2
}

*/

// Operadores Arimeticos

/*
  + suma
  += adisión o incremento
  - resta
  -= sustracción o decremento
  * multiplicación
  / divicion
  % resto
  Math.sqrt()
  Math.pow()
*/

// Operadores Logicos

/*

! negacion
!= distinto
!== desigualdad
== igualdad
=== igualdad absoluta
< mayor
> menor
<= mayor o igual
>= menor o igual
&& y
|| o


*/

// Condicionales

if(1 > 2) console.log("No")
if(1 > 2) {
  console.log("No")
}else{
  console.log("otro")
}
// Condicional ternario
(1 > 2) ? console.log("No") : console.log("otro")

if(1 > 2) {
  console.log("No")
}else if(2 > 1){
  console.log("Si")
}else{
  console.log("otro")
}

switch ("A") {
  case "A":
    console.log("es una vocal")
  break;
  case "E":
    console.log("es una vocal")
  break;
  case "I":
    console.log("es una vocal")
  break;
  case "O":
    console.log("es una vocal")
  break;
  case "U":
    console.log("es una vocal")
  break;

  default:
    console.log("es una consonante");
}

switch ("A") {
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log("es una vocal")
  break;

  default:
    console.log("es una consonante");
}


// Funciones
const SUMA = function(a,b) {
  return a + b
}

function SUMA (a,b) {
  return a + b
}

const SUMA = (a,b) => {
  return a + b
}
const SUMA = (a,b) => a + b

// Clousure
function primera(arg){
  function segunda(){}
  return segunda(arg)
}

// Callbacks

function calculadora(a,b,operacion){
  return operacion(a,b)
}

calculadora(1,2,(a,b) => a+b)


SUMA(1,2)