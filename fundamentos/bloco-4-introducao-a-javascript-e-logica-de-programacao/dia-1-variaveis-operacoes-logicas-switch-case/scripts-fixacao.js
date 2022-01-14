const myName = "Henrique";
const birthCity = "Sao Paulo";
let birthYear = 1922;

birthYear = 2020;

console.log(myName);
console.log(birthCity);
console.log(birthYear);








let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);
console.log(typeof patientId);

patientId = '50';

console.log(typeof patientId);







const base = 5;
let height = 8;

const area = base*height;
console.log(area);

const perimeter = base*2+height*2;
console.log(perimeter);






const nota = 60;

if(nota>=80){
    console.log("Parabens voce foi aprovado");
}   
else if(nota<80 && nota>=60){
    console.log("Voce esta na nossa lista de espera");
}
else{
    console.log("Voce foi reprovado");
}







const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}





const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);








const currentHour = 11;
let message= null;

if(currentHour>=22){
    message='Não deveríamos comer nada, é hora de dormir';
}
else if(currentHour>=14 && currentHour<22){
    message="Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour<14 && currentHour>=11){
    message ="Hora do almoço!!";
}
else if(currentHour>11 && currentHour>4){
    message="Hmmm, cheiro de café recém passado" ;
 }

console.log(message);


let weekDay = "segunda";
if(weekDay==="domingo"||weekDay==="sabado"){
    console.log("FINALMENTE, descanso merecido UwU")
}
else{
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}