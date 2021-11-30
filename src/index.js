// import { nome, sobrenome, idade, soma, Pessoa as outrCoisa } from "./modulo1";
// import * as meuModulo from "./modulo1";
import qualquerNome, {nome, sobrenome, idade, soma} from "./modulo1";//'qualquerNome' pega o default do arquivo importado, sempre que importamos sem a chave estamos a importar o 'default'



// console.log(nome, sobrenome, idade);
// console.log(soma(idade, idade));

// const p1 = new outrCoisa(nome, sobrenome);
// console.log(p1);

// console.log(meuModulo);
console.log(qualquerNome(idade, idade));
console.log(soma(idade, idade));