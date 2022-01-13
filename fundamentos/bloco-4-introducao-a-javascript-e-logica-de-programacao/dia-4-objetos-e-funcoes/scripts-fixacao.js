// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//     valor: 10000,
//   };

// console.log("O carro marca "+ car.type + " do modelo " + car.model + " de cor "+ car.color +" custa " + car.valor +" R$");

// console.log("-------------------------Exemplo-2------------------------------------------- ");

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   };
  
//   //console.log(diasDaSemana.1); // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo


//   console.log("-------------------------Exemplo-3------------------------------------------- ");

//   let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4



//   console.log("-------------------------Exemplo-4------------------------------------------- ");

//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   console.log("-------------------------Exemplo-5------------------------------------------- ")

//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey




//              PARA MEMORIZAR

// let list = [4, 5, 6];

// for (let i in list) {
//    console.log(i); // "0", "1", "2",
// }

// for (let i of list) {
//    console.log(i); // "4", "5", "6"
// }




  console.log("-------------------------Exercicio-1------------------------------------------- ");

let player={
     name : 'Marta',
     lastName : 'Silva',
     age : 34,
     bestInTheWorld:[],
     medals:{
        golden : 2,
        silver : 3, 
     },
};

console.log("-------------------------Exercicio-Objetos-2------------------------------------------- ");

player["fullName"]=player.name + " "+player.lastName;

console.log("A jogadora " + player.fullName + " tem " + player.age + " anos de idade");

console.log("-------------------------Exercicio-Objetos-3------------------------------------------- ");

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("-------------------------Exercicio-Objetos-4------------------------------------------- ");

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por "+ player.bestInTheWorld.length + " vezes.");

console.log("-------------------------Exercicio-Objetos-5------------------------------------------- ");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata.");





console.log("-------------------------Exemplos -FOR/IN-1------------------------------------------- ");

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}



console.log("-------------------------Exemplos -FOR/IN-2------------------------------------------- ");

let carro = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in carro) {
    console.log(index, carro[index]);
  }


console.log("-------------------------Exemplos -FOR/IN-3------------------------------------------- ");

//DIFERENCA FOR IN = POSICAO E FOR OF= VALOR

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;



console.log("-------------------------Exercicio -FOR/IN-1------------------------------------------- ");


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let i in names){
      console.log("Olá "+names[i]);
  }



console.log("-------------------------Exercicio -FOR/IN-2------------------------------------------- ");

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let i in car){
    console.log(i,car[i]);
}



console.log("-------------------------Exemplos -FUNCAO-1------------------------------------------- ");


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo


function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!



  console.log("-------------------------Exemplos -FUNCAO-2------------------------------------------- ");


  let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado




console.log("-------------------------Exemplos -FUNCAO-3------------------------------------------- ");

// Com função
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7


  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais