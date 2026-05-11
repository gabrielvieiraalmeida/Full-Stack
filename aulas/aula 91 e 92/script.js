function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
};

var aluno1 = {
    nome: "Fabrício",
    notas: [4, 3],

    media: calcMedia
};

var aluno2 = {
    nome: "Hiago",
    notas: [2, 1],

    media: calcMedia
};

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());


