//Nome do aluno - nota1 - nota2 - média - Aprovado /Reprovado


var nomes = ["João", "Gullherme", "Carlos"];

var notasA = [5.5, 2.9, 7.3];

var notasB = [4.8, 6.5, 5.3];


function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou() {

    if (media >= 5)
        return "Aprovado";
    else
        return "Reprovado";
}

for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(notasA[index], notasB[index]);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " e " +
        nota2 +
        " = " +
        m +
        " - " +
        passou(m));
}

