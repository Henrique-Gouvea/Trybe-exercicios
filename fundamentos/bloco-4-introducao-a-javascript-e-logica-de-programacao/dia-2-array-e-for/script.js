let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log("--------------------------Exercicio 2 --------------------------------")

let soma=0;
for(i=0; i<numbers.length; i++){
    soma = soma+numbers[i];
}
console.log("A soma dos arrays e " + soma);

console.log("--------------------------Exercicio 3 --------------------------------")

let media=0;
for (i=0; i<numbers.length; i++){
    media= media+numbers[i];
}

console.log("A media dos numeros e " +media/numbers.length);


console.log("--------------------------Exercicio 4 --------------------------------")

if(media/numbers.length<=20){
    console.log("A e media "+ media/numbers.length + " ela e menor ou igual a 20");
}
else{
    console.log("A e media "+ media/numbers.length + " ela e maior que 20");
}

console.log("--------------------------Exercicio 5 --------------------------------")

let maior=null;
for(i=0; i<numbers.length; i++){
    if (numbers[i]>maior){
        maior=numbers[i];
    }
}
console.log("O maior numero e o "+maior);

console.log("--------------------------Exercicio 6 --------------------------------")

count=0;
for(i=0; i<numbers.length; i++){
    if(numbers[i]%2!=0){
        count++;
    }
}
if(count>0){
    console.log("Existe(m) "+count+" numero(s) impar(es).");
}
else{
    console.log("Não existem numeros impares.");
}

console.log("--------------------------Exercicio 7 --------------------------------")

let menor=Infinity;
for(i=0; i<numbers.length; i++){
    if(numbers[i]<menor){
        menor=numbers[i];
    }
}
console.log("O menor numero e "+menor);



console.log("--------------------------Exercicio 8 --------------------------------")

let vinteCinco = [];
for(let i=1; i<=25; i++){
    vinteCinco.push(i);
}
console.log(vinteCinco);

console.log("--------------------------Exercicio 9 --------------------------------")


for (i of vinteCinco){
    console.log(i);
    console.log(i/2);
}