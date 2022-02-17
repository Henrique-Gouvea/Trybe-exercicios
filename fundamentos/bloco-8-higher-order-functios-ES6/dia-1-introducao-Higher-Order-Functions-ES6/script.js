// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const newEmployees = (criaEmail) => {
//     const employees = {
//       id1: criaEmail('Pedro Guerra'), 
//       id2: criaEmail('Luiza Drumond'), 
//       id3: criaEmail('Carla Paiva'), 
//     }
//     return employees;
//   };

//   const criaEmail = (name) => {
//     const nomeEmail = name.toLowerCase().replace(/\s/g, '');
//         return {
//           nomeCompleto: name,
//           email: `${nomeEmail}@trybe.com.br`,
//       };
//   };

//   console.log(newEmployees(criaEmail));

//----------------------------------Exer 2 --------------------------------------------------

//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const result = (apostado) => {
    const numberSort = Math.ceil((Math.random()*5));
    if (apostado(numberSort) === true) return 'Parabéns você ganhou';
    return 'Tente novamente';
}

const apostado = (numeroSort) => numeroSort === 4;

console.log(result(apostado));

//----------------------------------Exer 3 --------------------------------------------------

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (resp, stu, check) => {
  return `Sua pontuação foi ${check(resp, stu)}`;
}

const check = (respOk, respStu) => {
    let soma = 0;
    for (let i = 0; i < respOk.length; i += 1){
        if (respStu[i] !== 'N.A'){
            if (respOk[i] === respStu[i]){
                soma += 1;
            } else {
                soma -= 0.5;
            }
        }
    }
    return soma;
}

console.log(compare(RIGHT_ANSWERS, STUDENT_ANSWERS, check));