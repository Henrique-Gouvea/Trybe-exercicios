// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);
//OTIMIZANDO ABAIXO


const testingScope = escopo => escopo ? ' ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)';

  console.log(testingScope(false));








  //pt2
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordena = numbers => `Os numeros ${numbers.sort((a,b)=>a-b)} se encontram em ordem.`;

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉
  console.log(ordena(oddsAndEvens));