//---------------------------------Spread Operator--------------------------------

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'mamao', 'laranja'];

const fruitSalad = (fruit, additional) => {
  const newFruitsadd = [...specialFruit, ...additionalItens];
  return newFruitsadd;
};

console.log(fruitSalad(specialFruit, additionalItens));

//---------------------------------Parâmetro Rest---------------------------------------
function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

  //-------------------------------Object Destructuring------------------------------------


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //---------------------------------------Fixar-----------------------------------

  //1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. 


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const {profession, squad, squadInitials} = jobInfos;
  console.log(profession);

const userJobInfos = {...user, ...jobInfos};
console.log(userJobInfos);

//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

const printApresetation = ({name, age, nationality, profession, squadInitials, squad}) => {

console.log(`Hi, my name is ${name}, I"m ${age} years old and I"m ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

}

printApresetation(userJobInfos);