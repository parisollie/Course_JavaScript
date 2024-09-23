/*************************** Vid 08 -Estructura tipo de Datos ******************************************/

// Tipos de datos son 8 

/*************************************** 1 . - Undefined ******************************************/
 
//Se asigna cuando se crea una variable

// let cliente 
// console.log(cliente)
//Verificamos el tipo de dato.
// console.log(typeof cliente)

/*************************************** 2 .- Boolean ******************************************/

// const descuento = false
// console.log(descuento)
// console.log(typeof descuento)

/*************************************** 3 . - Number ******************************************/

// const numero1 = 20.20
// const numero2 = 30
// const numero3 = -100

// console.log(typeof numero1)
// console.log(typeof numero2)
// console.log(typeof numero3)

/****************************** 4 . - Strings o Cadenas de Texto **********************************/

// const alumno = "Rafael"
// let producto = 'Monitor 20 pulgadas'

//Comillas dovles string y sin comillas es numero 
// const numero = "30"
// const numero2 = 30

// console.log(typeof numero)
// console.log(typeof numero2)

/*************************************** 5 . - BigInt ******************************************/

//Los BigInt  no se mezclan con numeros grandes 
// const numeroGrande = BigInt(918298193891887139831091038173813)
// console.log(typeof numeroGrande)
// const numero = 10
// const numero2 = 20

//Cohersion cambiamos el tipo de dato para usar la suma.
// console.log( numero + Number(numeroGrande))

// const numero = "30"
// const numero2 = 30
// console.log( typeof String(numero2))
// console.log( typeof Number(numero))

/*************************************** 6 . - Symbol ******************************************/

//Un Symbol siempre es único.

// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
//Cae en falso porque siempre son diferentes.

// console.log( primerSymbol === segundoSymbol )
// console.log( primerSymbol.valueOf() )
// console.log( segundoSymbol.valueOf() )

/*************************************** 7 . - Null ******************************************/
//Valores vacíos 

// const descuento = null
// console.log(typeof descuento)