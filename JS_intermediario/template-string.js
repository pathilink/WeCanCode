// forma antiga:
// var nome = "Patrícia";

// forma atual:
let meuNome = "Patrícia";
let meuSobrenome = "do Nascimento";
let minhaProfissao = "Pythonist";

// Sem Template String
console.log("Olá, meu nome é " + meuNome + " " + meuSobrenome + " e eu sou " + minhaProfissao + ".");

// Com Template String
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e eu sou ${minhaProfissao}.`)

console.log(`O resultado da soma 1 + 1 = ${1+1}.`);
console.log(`O objeto json ${{chave: 'valor'}}.`);

let meuObjeto = { chave: "novo valor" };
console.log(meuObjeto);