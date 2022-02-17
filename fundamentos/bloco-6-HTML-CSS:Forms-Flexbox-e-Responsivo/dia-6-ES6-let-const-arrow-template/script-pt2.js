const fatorial = number =>{
    let cont = 0;
    while(cont!==number){
        number = number*cont;
        cont =+ 1;
    }
    return number;
} 



console.log(fatorial(5));
