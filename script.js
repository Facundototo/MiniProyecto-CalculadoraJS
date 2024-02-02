
let botones = [...document.querySelectorAll('button')];      //Todos los botones del html almacenados en este array.
let labelOperacion = document.getElementById('operacion');      //El label con la operacion.

let valor = '',numeroStr = '',botonAnterior = '';      //Declaracion e inicializacion de variables.
let numeros = [],operadores = [];
let primeroEsNeg = false, resEnviado = false;
let res = 0;

window.addEventListener('keydown', event =>{        //Listener por si el usuario quiere teclear la operacion.
    const keyPresionada = botones.find(boton => boton.textContent === event.key);       //Retorno mediante .find() el boton que coincida con la keycode que toco el usuario.
    if(keyPresionada !== undefined){ manipularEventoBotones(keyPresionada); }       // Esta condicion porque el .find() cuando no encuentra retorna undefined.Si se encontro llamo a la funcion.
})
botones.forEach(boton => {      //Recorro cada boton con el .forEach() y les aplico a cada uno el evento 'click'.
    boton.addEventListener('click',() => {
        manipularEventoBotones(boton);
    });
});


const manipularEventoBotones = (boton) => {     //Meti el codigo en esta funcion para reutilizarlo, en el caso de que el usuario escriba con el teclado.

    if(validarIngreso(boton,botonAnterior)){        //Llamo al funcion validarIngreso() si me retorna true, quiere decir que no hay errores en la operacion.

        almacenarDatos(boton);      //Guardo valores para despues.

        if(boton.className === 'operador' && !primeroEsNeg){        //Si el boton es un operador y la !primeroEsNeg para que no me tome al - y lo pushee como un operador.
            operadores.push(valor);         //Pusheo el valor, al array operadores para despues hacer las cuentas.
            if(!resEnviado){numeros.push(parseFloat(numeroStr))}        // Cuando el usuario toca un operador, almaceno los numeros (string) previos en un array. 
            else{labelOperacion.textContent = (res + boton.textContent);}       //Si toca '=' y paso por este if, esta escribiendo otra operacion con el resultado,por ende se borra lo anterior.
            numeroStr = '';                           //El if del renglon de arriba es porque si se toco '=' y toca un operador se pushea al numeroStr (que no tiene nada), cosa que no tendria que pasar.
            resEnviado = false;     //Si estaba en true al pasar por aca lo pongo en false.
        }else if(boton.className === 'numero' || boton.className === 'punto'){        //Si el boton es un numero o es un punto.
            numeroStr += (primeroEsNeg)?'-'+boton.textContent:boton.textContent;     //Aca lo que hago es ir concatenando los numeros que va ingresando. Hasta que ponga un operador.
            primeroEsNeg = false;       //Arriba si el primero es negativo le agrego al numero la negacion, desp defaulteo el boolean.
        }else if (boton.className === 'igual'){        //Si el boton es el igual.
            numeros.push(parseFloat(numeroStr));        //Pusheo el ultimo numero que quedo suelto. Sino en el primer if no lo pushea.
            resEnviado = true;      //Aca se cambia a true el resEnviado ya que toco '='.
            numeroStr = '';                             
            calcularOperacion();        //Calculo el resultado de la operacion ingresada.      
            operadores = [];        //Reseteo el array operadores. 
        }else if(boton.className === 'borrar'){        //Si el boton es el de borrar.
            limpiarVariables();
        }
    }
}


const limpiarVariables = () => {        //Cree esta funcion mas que nada porque quedaba mal resetear todas las variables en el if.
    labelOperacion.textContent = '';     
    botonAnterior = '';
    operadores = [];     
    numeroStr = '';
    valor = '';
    resEnviado = false;   
    res = 0;
    numeros = [];     
}

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
            case '%':
                numeros.splice(0,2,numeros[0]%numeros[1]);
                break;
        }
    });
    res = numeros[0];
    labelOperacion.textContent += res;       //Resultado final almacenado en numeros[0]. 
}; 

const validarIngreso = (boton,botonAnterior) => {       //Funcion retorna true si no encuentran fallas en la operacion cuando se escribe, false si es incorrecto el ingreso de datos.

    let operadoresPuntoSeguidos = ((boton.className === 'operador' && botonAnterior.className === 'operador') || (boton.className === 'punto' && botonAnterior.className === 'punto'));
    let clickIgualDespOperador =  (boton.className === 'igual' && botonAnterior.className === 'operador');
    let igualesSeguidos = (boton.className === 'igual' && botonAnterior.className === 'igual');
    let alPrincipioIgual = (labelOperacion.textContent.length === 0 && boton.className === 'igual');        //Masomenos los nombres de las variables explican las excepciones que pueden ocurrir.
    let alPrincipioOperador = (labelOperacion.textContent.length === 0 && (boton.textContent !== '-' && boton.className === 'operador'));
    let resultadoDespNumero = (resEnviado && (boton.className === 'numero' || boton.className === 'punto'));
    let puntoDespOperadorIgual = ((boton.className === 'igual' && botonAnterior.className === 'punto') || (boton.className === 'operador' && botonAnterior.className === 'punto'));

    if(operadoresPuntoSeguidos || clickIgualDespOperador || igualesSeguidos || alPrincipioIgual || alPrincipioOperador || resultadoDespNumero || puntoDespOperadorIgual){
        return false;
    }else if ((labelOperacion.textContent.length === 0 && boton.textContent === '-')){
        primeroEsNeg = true;
        return true;
    }else {     //Este else para los numeros mas que nada.
        return true;
    }
};

const almacenarDatos = (boton) => {
    botonAnterior = boton;      //Almaceno el botonAnterior con el fin de usarlo en validarIngreso().
    labelOperacion.textContent += boton.textContent;     //Voy almacenando toda la operacion que se va a mostrar en pantalla.
    valor = boton.textContent;      
};
