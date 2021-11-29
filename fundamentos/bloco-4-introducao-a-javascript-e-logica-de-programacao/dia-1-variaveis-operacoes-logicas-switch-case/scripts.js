const a=5;
const b=5;
const c=5;

console.log("A adicao de a+b e");
console.log(a+b);

console.log("A subtracao de a-b e");
console.log(a-b);

console.log("A multiplicacao de a*b e");
console.log(a*b);

console.log("A divisao de a/b e");
console.log(a/b);

console.log("------------------EXERCICIO 2-----------------------");


if(a>b){
    console.log("O numero maior e ");
    console.log(a);
}
else if(a<b){
    console.log("O numero maior e ")
    console.log(b);
}
else{
    console.log("Eles são iguais")
}

console.log("------------------EXERCICIO 3-----------------------");


if(a===b||a===c||b===c){
    if(b<a){
        console.log("O numero maior e");
        console.log(a);
    }    
    else if(b>a){
        console.log("O numero maior e");
        console.log(b);
    }
    else if(c>a){
        console.log("O numero maior e");
        console.log(c);
    }
    else if(c<a){
        console.log("O numero maior e");
        console.log(a);
    }
    else{
        console.log("Os tres sao iguais");
    }
}
else if(a>b){
    if(a>c){
        console.log("O numero maior e");
        console.log(a);
    }
}
else if(b>a){
    if(b>c){
        console.log("O numero maior e ");
        console.log(b);
    }
}
else if(c>a){
    if(c>b){
        console.log("O numero maior e ");
        console.log(c);
    }
}



console.log("-----------------EXERCICIO 4------------------------");



if(a>0){
    console.log("positive");
}
else if(a<0){
    console.log("negative");
}
else{
    console.log("zero")
}




console.log("-----------------EXERCICIO 5------------------------");



if((a+b+c)>0){
    console.log(a+b+c==180);
}
else{
    console.log("invalido");
}






console.log("-----------------EXERCICIO 6------------------------");


let pecaXadrez="ew";


switch (pecaXadrez.toLowerCase()){
    case "torre":
        console.log("Horizontal e vertical");
        break;
    case "bispo":
        console.log("Diagonal");
    break;
    case "bispo":
        console.log("Diagonal");
    break;
    default:
        console.log(pecaXadrez +' Não e uma peca de xadrez');
} 



console.log("-----------------EXERCICIO 7------------------------");


const percent=55;

if(percent<=100 && percent>=0){
    if(percent>=90){
        console.log("Nota A");
    }
    else if(percent>=80){
        console.log("Nota B");
    }
    else if(percent>=70){
        console.log("Nota C");
    }
    else if(percent>=60){
        console.log("Nota D");
    }
    else if(percent>=50){
        console.log("Nota E");
    }
    else{
        console.log("Nota F");
    }
}
else{
    console.log(percent+" Não e uma nota valida");
}






console.log("-------------------EXERCICIO 8----------------------");






if(a%2==0||b%2==0||c%2==0){
    console.log((a%2==0||b%2==0||c%2==0));
}
else{
    console.log(a%2==0||b%2==0||c%2==0);
}





console.log("--------------------EXERCICIO 9---------------------");



if(a%2==1||b%2==1||c%2==1){
    console.log((a%2==0||b%2==0||c%2==0));
}
else{
    console.log(a%2==0||b%2==0||c%2==0);
}


console.log("--------------------EXERCICIO 10---------------------");

let venda = 2;
let custo = 1;

if (custo<0||venda<0){
    console.log("Valor nao pode ser abaixo de zero")
}
else{
    console.log((venda-(custo+(0.2*custo)))*1000);
}



console.log("--------------------EXERCICIO 11---------------------");

let salariobruto = 1500.10;
