//v1 funcion que le pasa como paramtro un numero de grados celsius y lo tranformado a grado kevin 


    function celsiusToKelvin(celsius){
      let kelvin = celsius + 273.15
      return kelvin
    }
//v2 version donde priorizamos el el menor numero de lineas 

    function celsiusToKelvin2(celsius){
      return celsius + 273.15
    }


//v3 (modo pro usando arrow fuction)
    

    const celToket = (celsius) => {

      return celsius +273.15
    }

//v4 (modo pro max)

  
    const celsiusToKelvin1 = (celsius) => celsius + 273.15

// ejercicio 1. Funcion que le pase como parametro 2 numeros y que me los ordene 

//primera opcion noob

  function ordenar (num1, num2){
    if(num1>num2){
       return [num2, num1]
    }
    return [num1, num2];
  }
//segunda opcion pro max

  function ordNum(num1,num2){
    return [Math.min(num1,num2), Math.max(num1,num2)];
  }



// ejercicio 2. Funcion que pase de celsius a kelvin pero coprobando que celsius es un numero, que la temperatura
// no puede estar por debajo del 0 absoluto -273 grados celsius
// y el resultado me lo das en 2 cifra decimal
// isNaN -->isNaN() en JavaScript determina si un valor es o se convierte en NaN (Not-a-Number, que significa "no es un número").
// como trincar un numero a 2 cifras 


  function celToKEL (celcius){

    
    if(isNaN(celcius)){

      return "no es un un numero valido  "
    }
    if (celcius < -273){

      return "la temperatura es menor a -273"
    }
  
      let kelvin = celcius + 273.15
      return Number(kelvin.toFixed(2))   
  }        
    
    
