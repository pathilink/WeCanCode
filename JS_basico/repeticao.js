// var tabuada = 7;
// for (var i = 0; i <= 10; i++) {
//     console.log("valor de " + tabuada + " * " + i + " = " + tabuada * i);
// }

// var numeroSorteado = 10;
// for (var i = 0; i < 100; i++) {
//     if (numeroSorteado === i) {
//         console.log("Seu número foi sorteado.");
//         break;
//     }
// }

var achou = false;
var numeroSorteado = 10;
var possivelValor = 0;
while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log("Possível valor não corresponde ao número sorteado " + possivelValor);
    }

}