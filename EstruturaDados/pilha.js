// last in first out

var elementos = []; // vetor
var topo = -1; // -1 indica fora do vetor (posicao)
const MAX = 10; // tamanho maximo do vetor

function push(num) {
    if (topo < MAX) {
        topo = topo + 1; // atualiza posicao
        elementos[topo] = num;
    } else {
        console.log("Pilha está cheia");
    }
}

function estaVazia() {
    return topo == -1;
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo]; // let: var local
        topo = topo - 1;
        return num;
    } else {
        console.log("Pilha está vazia.")
    }
}

// uso da pilha no código ----------------------------------------------------

/*
push(10);
push(20);
push(30);

console.log(elementos);

console.log(pop());
console.log(pop());
console.log(pop());
*/

/*
10 / 2
0    5 / 2
     1   2 / 2
         0   1 / 2
             1   0

             10 (decimal) == 1010 (binário)
*/

var numDecimal = 10;
var resto;

console.log("Empilhando tudo:");
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    console.log(resto);
    numDecimal = parseInt(numDecimal / 2);
}

console.log("Desempilhando tudo:");
while (!estaVazia()) {
    console.log(pop());
}