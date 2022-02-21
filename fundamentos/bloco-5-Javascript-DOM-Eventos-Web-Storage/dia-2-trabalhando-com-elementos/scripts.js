// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let title = document.createElement("h1");

title.innerText = "Exercício 5.2 - JavaScript DOM";

let body = document.querySelector("body");

body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body ;

let main = document.createElement("main");

main.className = "main-content";

body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionCenter = document.createElement("section");

sectionCenter.className = "center-content";

main.appendChild(sectionCenter);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p = document.createElement("p");

p.innerText = "Esse exercicio e para aprendizado e fxacao do DOM";

sectionCenter.appendChild(p);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement("section");

sectionLeft.className = "left-content";

main.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement("section");

sectionRight.className = "right-content";

main.appendChild(sectionRight);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement("img");

image.setAttribute("src", "https://picsum.photos/200");

image.className = "smal-image";

sectionLeft.appendChild(image);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listNoOrden = document.createElement("ul");
let numbers = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

sectionRight.appendChild(listNoOrden);



for(let i=0; i < numbers.length; i += 1){
    let listNumbersNoOrden = document.querySelector("ul");
    let list = document.createElement("li");
    list.innerText = numbers[i];
    listNumbersNoOrden.appendChild(list);
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.



function criaH3(valor){
    let H = document.createElement("h3");
    main.appendChild(H);
    H.innerText = valor;
}

criaH3("Henrique");
criaH3("Trybe");
criaH3("Test");
