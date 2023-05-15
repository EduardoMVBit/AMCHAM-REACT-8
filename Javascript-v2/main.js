// Metodos de String
"eduardo".toUpperCase() // EDUARDO
"EDUARDO".toLowerCase() // "eduardo"
"eduardo virgilio".indexOf("wh") // -1
"eduardo virgilio".includes("du") //true
"space,moon,sun,earth".split(",") // ['space', 'moon', 'sun', 'earth']
"en un lugar de la mancha cuyo nombre no me acuerdo".slice(0,24) // 'en un lugar de la mancha'
"en un lugar de la mancha cuyo nombre no me acuerdo".replace("mancha","bella colombia") // 'en un lugar de la bella colombia cuyo nombre no me acuerdo'
" eduardo virgilio ".trim() // 'eduardo virgilio'


// Metodos de Number

Number(10.1).toFixed(2).replace(".",",")// 10,10 string
parseInt("10.10") // 10 number
parseFloat("10.10") // 10.1 number

// Ciclos

let contador = 3

while (contador > 0) {
  console.log(contador)
  contador -= 1
}

for (let contador = 3; contador > 0; contador -= 1) {
  console.log(contador)
}

let cuenta = 3

do {
  console.log(cuenta)
  cuenta -= 1
} while (cuenta > 0);

for (const key in {nombre:"eduardo",apellido:"virgilio"}) {
  if (Object.hasOwnProperty.call({nombre:"eduardo",apellido:"virgilio"}, key)) {
    const element = {nombre:"eduardo",apellido:"virgilio"}[key];
    console.log(key,element)
  }
}

for (const iterator of ["luis","maria","juan"]) {
  console.log(iterator.toUpperCase())
}


// Metodos de Array

Array.from({length:4}) // [undefined, undefined, undefined, undefined]
["lucas","maria","juan"].join(",") // 'lucas,maria,juan'
["lucas","maria","juan"].shift() // 'lucas'
["lucas","maria","juan"].pop() // 'juan'
["lucas","maria","juan"].slice(1,2) // ['maria']
[0,1,-1].filter((numero) => numero > -1) // [0,1]
[10,-5,2].reduce((actual,numero)=> actual += numero,0) // 7
[2,1,3].map(numero => numero * 2) // [4, 2, 6]
Array.from({length:10}).map((elemento,indice) => indice+1).filter(numero => numero < 10).filter(numero => numero % 2 == 0).forEach(numero => console.log(numero)) 
/*
2
4
6
8*/