//nome do aluno - nota1 + nota2 / 2 = media - aprovado/reprovado

var alunos = ["João", "Gustavo", "Laura", "Enzo"];

var media = function (n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2;

    return media;
}

var soma = function () {
    if (media >= 8) {
        console.log("Aprovado")
    }
    else if (media >= 5) {
        console.log("Recuperação")
    }
    else {
        console.log("Reprovado")
    }
}

switch (media) {

    case ("Aprovado"):
        console.log("Meus parabéns por passar!")
    case ("Recuperação"):
        console.log("Precisa fazer recuperação para ter chances de passar")
    case ("Reprovado"):
        console.log("Infelizmente você reprovou. Estude mais!")
    default:
        console.log("Houve algum erro")
}

for (alunos in function )






