const nome = 'Mona';
const sobrenome = 'Garcia';
const idade = 30;
// const cpf = 123456;

// export default function soma(x, y) {
//     return x + y;
// }

function soma(x, y) {
    return x + y;
}

export default (x,y) => x * y;//retorna 'x * y'

export {nome, sobrenome, idade, soma};

// export class Pessoa{
//     constructor(nome, sobrenome){
// this.nome = nome;
// this.sobrenome = sobrenome;
//     }
// }