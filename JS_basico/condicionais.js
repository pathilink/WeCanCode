var nome = "Patrícia";

/*
if (nome === "Patrícia") {
    console.log("Legal! Seu nome é este mesmo.");
} else if (nome === "Loro") {
    console.log("Tudo bem! Você também serve.")
} else {
    console.log("Que pena! Seu nome não é Patrícia.")
}
*/

switch (nome) {
    case "Patrícia":
        console.log("Legal! Seu nome é este mesmo.");
        break;
    case "Loro":
        console.log("Ah! Você também serve.");
        break;
    default:
        console.log("Que pena! Você não é Patrícia ou Loro.");
        break;

}