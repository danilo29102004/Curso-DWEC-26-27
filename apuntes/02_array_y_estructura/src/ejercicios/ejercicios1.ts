//Enunciado: Ejercicio uso de arrays y tipado
//Autor: Daniel Villegas
//Investigacion: Fuentes consultadas
//
//como tipar arrays


const activos: boolean[] = [true, false, true, true];
const nombres: string[] = ["pepe", "luis", "carlos"];


const edades: Array<number = [12, 22, 18];
const precios = [65, 34, 25];

console.log(typeof precios;

//arrays con mas de un tipo
const valores: (string | numbre)[] = ["ana", 25, "luis", 56];

//comodo para empezar

const personas: [string, number] = ["ana", 45]


//leer elementos de un array

console.log(nombres[0])//----> "pepe"
nombres[0] = "donmanuel"

//insertar o eliminar en el primer lugar o el ultimo lugar
//modifica el contenido del array
nombres.push("sara")

//eliminar el ultimo elemento de un array
nombres.pop("federico")//----- devuelve el nuevo array modificado


//añadir al comienzo del array
nombres.unshift("pedro")

//para eliminar en el comienzo del array
nombres.shift()

//metodos que mutan y no mutan
//push(),pop(),shift(),unshift(),splice(),sort(),reverse(), splice()  -------->mutan los arays

//metodo slice()<------------ me devuelve una parte de array sin mutarl el array *****
const numero: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numero.slice(1, 4); // [20,30,40] //---- coge la primera posicion 1 pero no coge la ultima posicion 4

//metodo splice() <------------ eliminar añadir o sustituir elementos de array muta el array
numero.splice(1, 2)// <--------- [10,40,50]

//copiar arrays

const num: number[] = [1, 2, 3];
const copia: number[] = [...num]// ----- tiene una copia de 1,2,3
const copia2: number[] = [...num, 6];

//recorrer un array
//for(let i=0; i<num.length; i++)

//for of solo cuando queremos el valor
for (const precio of precios) {
  console.log(precio)
}

//forEach() se usa mucho en react
//se tiene que pasar una funcuin flecha
//primero se crea la fucnion flecha

precios.forEach((precio, incide) => {
  console.log('precio: ${precio} - posicion: ${posicion}')

});

//metodos que usan funciones CallBack
//
//forEach(), nop(), filter(), muy importante para react
//un callback es una funcion por tanto esos metodos reiben como parametro una funcion








