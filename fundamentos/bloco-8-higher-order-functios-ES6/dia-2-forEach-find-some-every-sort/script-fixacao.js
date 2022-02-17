//------------------------------------FOR EACH-------------------------------

//Passa por todos os dados do array e mostra eles 

//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach(showEmailList);

  console.log('---------------------------------------------------------------------------');

  //----------------------------------FIND-----------------------------------------
  //retorna o primeiro que corresponde a regra

  //1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

  const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  return (number %3 === 0 || number %5 === 0);
}

console.log(numbers.find(findDivisibleBy3And5));

//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  return nome.length === 5;
}

console.log(names.find(findNameWithFiveLetters));

//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]

  function findMusic(idFind) {
    return musicas.find((music) => music.id === idFind);
  }
  
  console.log(findMusic('31031686'));

  console.log('---------------------------------------------------------------------------');
  //------------------------------------Array.some e Array.every-----------------------------
  //Array.some = true se ao menos um elemento de um array satisfaz a uma condição
 
  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

 //Array.every =  true se todos os elementos de um array satisfazem a uma condição

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
console.log('----');
const namesSome = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nameCompare) => nameCompare === name);
}

console.log(hasName(namesSome, 'Ana'));

//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));

  console.log('---------------------------------------------------------------------------');
  //-------------------------------------SORT -----------------------

  // Organiza o array

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// //1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const peopleSort = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  peopleSort.sort((personA, personB) => personA.age - personB.age);
  
  console.log(peopleSort);
  console.log('-------------------')

  peopleSort.sort((personA, personB) => personB.age - personA.age);

  console.log(peopleSort);

  peopleSort.sort((personA, personB) => personA.name > personB.name);

  console.log(peopleSort);