n //Nome do aluno - nota1 - nota2 - média - Aprovado /Reprovado

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media){


    if (media > 7)
        return "Aprovado";
    else
        return "Reprovado";
}

for (var index in nomes) {

    var notas1 = notasA[index];
    var notas2 = notasB[index];

    var m = media(notas1, notas2);

    console.log(nomes[index] +
                " - "+
                notas1 +
                " e "+
                notas2 +
                " = "+
                m +
                " - " +
                passou(m));
}


//Nesse projetinho utilizamos: Variáveis, Arrays, function, Laço(for).
//Foi bem legal!