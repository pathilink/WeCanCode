// bubble sort

var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function ordena() {
    let inicio = 0;
    let fim = 10;
    let tmp;

    for (vezes = 0; vezes < valores.length; vezes++) {
        for (pos = inicio; pos < fim - 1; pos++) {
            if (valores[pos] > valores[pos + 1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

console.log("Vetor ordem descrescente:");
console.log(valores);
ordena();
console.log("Vetor ordem crescente:");
console.log(valores);