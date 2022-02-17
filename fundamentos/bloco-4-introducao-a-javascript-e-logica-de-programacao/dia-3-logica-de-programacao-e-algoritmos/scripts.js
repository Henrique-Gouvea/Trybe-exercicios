// let n=3;
// line="";

// for (let i=0; i<n; i++){
//     line=line+"*";
// }
// for(let i=0; i<n; i++){
//     console.log(line);
// }
// console.log("--------------------------------Exercicio-2-------------------------------");

// n=3;
// line="";

// for (let i=0; i<n; i++){
//     line=line+"*";
//     console.log(line);
// }

console.log("--------------------------------Exercicio-2-------------------------------");

n=4
let coluna="";
let linha="";

for(let colunai=0; colunai<n; colunai++){

    for(let linhai=1; linhai<=n; linhai++){
        
        if(n>linhai && n>colunai){
            linha=linha+" ";
        }
        else{
            linha=linha+"*";  
        }
    }
    console.log(linha);
    linha="";
    
}


