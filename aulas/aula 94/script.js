//O que aprendemos? Veja a seguir:

//1° maneira de criar um objeto:

/* var a = {
    nome: "Gabriel",
    sobrenome: "Almeida"
}

console.log(a); */


//2° maneira de criar um objeto:

/* function obj(n, s) {
    return { nome: n, sobrenome: s}
};

var a = obj("Gabriel", "Almeida")

console.log(a) */


//3° maneira de criar um objeto:

/* function obj(n, s) {

    this.nome = n;
    this.sobrenome = s;
};

var a = new obj("Gabriel", "Almeida")

console.log(a) */
