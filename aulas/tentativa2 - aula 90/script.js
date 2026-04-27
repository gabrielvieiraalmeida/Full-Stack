//Nomes dos alunos - nota1 - nota2 - media - Aprovado/Reprovado


var nomes = ["Igor", "João", "Ricador"];
var notasA = [5.5, 4.3, 9.6];
var notasB = [6.2, 4.5, 2.1];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media){

    if (media > 5)
        return "Aprovado";
    else
        return "Reprovado";
}

for (var index in nomes) {

    var notas1 = notasA[index];
    var notas2 = notasB[index];

    var m = media(notas1, notas2);

    console.log(nomes[index] +
                " recebeu notas: " +
                notas1 +
                " e " +
                notas2 +
                " = " +
                m +
                " - " +
                passou(m));
}