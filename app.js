let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;

        }

function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        //
        console.log(intentos);
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            //El usurio no acerto
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El numero es menor');
            } else {
                asignarTextoElemento('p','El numero es mayor');
            }
            intentos++;
            limmpiarCaja();
          
        } 
        return;
    }

    function limmpiarCaja(){
        document.querySelector('#valorUsuario').value = '';
    }

    function generarNumeroSecreto() {
         let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
         console.log(numeroGenerado);
         console.log(listaNumerosSorteados);
         //Si ya sorteamos tosos los numeros
         if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los numros posibles');

         } else {
         //Si el numero generado esta incluido en la lista
         if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

         } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }

        }
        
    }

    function condicionesIniciales(){
        asignarTextoElemento('h1', 'juego del numero secreto!');
        asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto(); 
        intentos = 1;

    }


    function reiniciarJuego(){
        //limpiar la caja
        limmpiarCaja();
        //indicar mensaje de intervalo de numeros
        //Generar numero aleatorio
        //Inicoalizar numero de intentos
        condicionesIniciales();
        //Deshabilitar boton de juego nuevo
        document.querySelector('#reiniciar').setAttribute('disabled','true');

        

    }

    condicionesIniciales();

    