let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3


let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift("Bicicleta");//Adicioan tarefa ao começo da lsita

console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

tasksList.shift(); ///remove o primeiro  da lista
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1


console.log("--------------------------Exercicio Fixacao  Arrays- 1 --------------------------------")

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]

console.log(menuServices);

console.log("--------------------------Exercicio Fixacao Arrays- 2 --------------------------------")

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);


console.log("--------------------------Exercicio Fixacao Arrays- 3 --------------------------------")

menu.push("Contato");
console.log(menu);

console.log("--------------------------Exercicio Fixacao FOR- 1 --------------------------------")

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i=0; i<groceryList.length; i++){
    console.log(groceryList[i]);
}



console.log("--------------------------Exercicio Fixacao FOR/OF- 1 --------------------------------")


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let names2 of names){
    console.log(names2);
}
