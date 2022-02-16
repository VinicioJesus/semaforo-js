'use strict';

const semaforo = document.getElementById('semaforo')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')

let idAuto = null

const ligarVermelho = () => semaforo.src = './img/vermelho.png'
const ligarAmarelo = () => semaforo.src = './img/amarelo.png'
const ligarVerde = () => semaforo.src = './img/verde.png'

const semaforoDesligado = () => semaforoDesligado.src.includes('desligado')

// const acionaAutomatico = () => {
//     if (semaforoDesligado()) {
//         ligarVerde()
//     }else{
        
//     }
// } 

const ligarAutomatico = () => {

    if (idAuto == null) {
        idAuto = setInterval(ligarVerde, 1000)        
        
        automatico.textContent = 'Parar'
        

    }else if(idAuto != null){
        idAuto = 0
        idAuto = setInterval(ligarAmarelo, 2000)
    }
    else{
        clearInterval(idAuto)
        automatico.textContent = 'Automatico'
        idAuto = null
    }


}

vermelho.addEventListener('click', ligarVermelho)
amarelo.addEventListener('click', ligarAmarelo)
verde.addEventListener('click', ligarVerde)
automatico.addEventListener('click', ligarAutomatico)