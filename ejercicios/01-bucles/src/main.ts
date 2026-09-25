
  //crear una funcion que mientras sea verdad compruebe todas los
  //numeor de un arrau pasado un parametro gurde los positivos en
  //un array llamado posotivo lso numeros positivos y en un array llamado negativo los numeros negativos
  //y calcule las suam de cada uno de los array
  //@autor:Daniel Villegas
  //creacion de funcion 




function clasificarNumeros(numeros:number){
  
    const positivo:number[]=[]
    const negativo:number[]=[]
    let sumaPositivo:number=0
    let sumNegativo:number=0
    
    for(const numero of numeros){
      if(numero>0){
        //añadir el numeroal array de positivos
        //con el metodo push
        positivo.push(numero)
        sumaPositivo += numero

      }else{

        negativo.push(numero)
        
        sumNegativo+= numero

      }

    }return{
      positivo,
      negativo,
      sumaPositivo,
      sumNegativo
      
    }
}
//------------------------------------inicio de la aplicacion ---------------------------------------------
const datos:number =[1,-10,25,11,9,5,-6,8,-5,9,12,-10] 

const resultado = clasificarNumeros(datos)
console.log("el array de positivos es: ", resultado.positivo)
console.log("-------------suma de array positivos: ", resultado.sumaPositivo)
console.log("el array de negativos es: ", resultado.negativo)
console.log("----------------suma de array negativo: ", resultado.sumNegativo)


