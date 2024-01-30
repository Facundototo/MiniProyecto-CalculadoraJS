
let botones = document.querySelectorAll('button');      //Todos los botones del html almacenados en este array.
let labelOperacion = document.getElementById('operacion');      //El label con la operacion.

let valor = '',numeroStr = '';      //Declaracion e inicializacion de variables.
let numeros = [],operadores = [];

botones.forEach(boton => {      //Recorro cada boton con el .forEach() y les aplico a cada uno el evento 'click'.
    boton.addEventListener('click',() => {

        labelOperacion.textContent += boton.textContent;        //Voy almacenando toda la operacion que se va a mostrar en pantalla.
        valor = boton.textContent;      

        if(boton.id === 'operador'){        //Si el boton es un operador.
            operadores.push(valor);         //Pusheo el valor, al array operadores para despues hacer las cuentas.
            numeros.push(parseFloat(numeroStr));        // Cuando el usuario toca un operador, almaceno los numeros (string) previos en un array. 
            numeroStr = '';     
        }else if(boton.id === 'numero'){        //Si el boton es un numero.
            numeroStr += boton.textContent;     //Aca lo que hago es ir concatenando los numeros que va ingresando. Hasta que ponga un operador.
        }else if (boton.id === 'igual'){        //Si el boton es el igual.
            numeros.push(parseFloat(numeroStr));        //Pusheo el ultimo numero que quedo suelto. Sino en el primer if no lo pushea.
            numeroStr = '';                             
            calcularOperacion();        //Calculo el resultado de la operacion ingresada.                     
            operadores = [];        //Reseteo el array operadores. 
        }else if(boton.id === 'borrar'){        //Si el boton es el de borrar.
            labelOperacion.textContent = '';       
            operadores = [];        
            numeros = [];       
        }
    });
});

const calcularOperacion = () => {       //Funcion que calcula la operacion.
    operadores.forEach((operador) => {      //Hago un .forEach() para recorrer los operadores almacenados.
        switch(operador){
            case '+':
                numeros.splice(0,2,numeros[0]+numeros[1]);
                break;  
            case '-':                                           //Aca hago siempre lo mismo, solo cambiando el operador en base al case.
                numeros.splice(0,2,numeros[0]-numeros[1]);      //Explicacion .splice() => numeros.splice({indiceEmpieza},{cantPosParaBorrar},{valorQueEntraPorBorrada}).
                break;                                          //Lo que hice en el switch fue almacenar el resultado final en la primera posicion de numeros.        
            case '*':
                numeros.splice(0,2,numeros[0]*numeros[1]);      
                break;  
            case '/':
                numeros.splice(0,2,numeros[0]/numeros[1]);
                break;
        }
    });
    labelOperacion.textContent += numeros[0];       //Resultado final almacenado en numeros[0]. 
}; 

