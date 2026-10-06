// Enunciado: Ejerciccios repaso de metodos de los arrays
// Autor: DAniel Villegas
// Investigación: Fuentes consultadas
//

const notas: number[] = [6, 8, 4, 9, 7];

//funcion que muestre todas las notas.

function mostrarNotas(notas: number[]): void {

  //console.log(notas)
  for (const note of notas) {
    console.log(note)
  }
  //notas.forEach((note:number) => console.log(note));

  //console.log(...notas)
}

//funcion que calcule la media de la notas
function calcularMedia(notas: number[]): void {

  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  console.log("la media es: ", suma / notas.length);
}


//fucnion que muestra la mayor nota y la posicion de esa nota



//funcion que calcule la mediana de las notas



//funcuin que devuelva un array con notas junto con la nota pasada como parametro



//funcuin que elimine una nota,revina el array nota u como segundo parametro 1 o -1 si es 1 elimina la primra posicion del array 
//ydevuelve una copia si es .1 elimina la ultima posicion del array devolviendo una copia.No mutamos el array del parametro ojo y no lo destruimos haciendo un clg del array del parametro para asegirar que no lo has mutado

//------------------ funcion de ejecucion -------------------
export function ejercicio2(): void {
  mostrarNotas(notas);
  calcularMedia(notas);
}
