function verificaPalindromo(){
    
    return(verifica===verifica.split("").reverse().join(""));
}
let verifica = "papaga";
console.log(verificaPalindromo());

console.log("-------------------------Exercicio -2 --------------------------- ");

function indiceMax(array){
    max=0;
    for (let i in array){
       if(array[max]<array[i]){
            max=i;
       }
    }
    return max;
}

let array = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMax(array));


console.log("-------------------------Exercicio -3 --------------------------- ");

function minIndice(array){
    min=Infinity;
    for(let i in array){
        if(array[min]<array[i]){
            min=i;
        }
    }
    return min;
}

console.log(minIndice(array));