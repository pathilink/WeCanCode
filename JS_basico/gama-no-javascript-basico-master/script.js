console.log("JavaScript carregado!");


function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        // console.log(numeros);
        // console.log(digitos);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); // operador ternário

        // validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // validação do segundo dígito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        // console.log(digitos.toString().charAt(0) + " primeira posição da var soma.");
        return true;
    }

}

function validacao() {
    console.log("Iniciando validação do CPF...");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var cpf = document.getElementById("cpf_digitado").value;
    // console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }

}