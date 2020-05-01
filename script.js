
let arrayDeNumeros = [3,8,9,7,6]
alert("Vetor Inicial: "+arrayDeNumeros)

function solucao(a,k){
    for ( var i=0; i < k; i++){
        a.unshift(a.pop())
    }
    return a;
}

alert("Rotacao 1: "+ solucao(arrayDeNumeros,1))
alert("Rotacao 2: "+ solucao(arrayDeNumeros,1))
alert("Rotacao 3: "+ solucao(arrayDeNumeros,1))

