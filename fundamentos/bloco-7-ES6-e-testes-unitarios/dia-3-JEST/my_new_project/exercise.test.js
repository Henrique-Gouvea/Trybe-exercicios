//https://tableless.com.br/jasmine-entendendo-os-matchers/

//O LINK ACIMA EXPLICA CADA MATCH EX; toEqual TO EQUAL ...



const sum = require('./sum');
const remove = require('./remove');

// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})


// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('teste remove item do array', () => {
  it('Verifica se remove o numero certo do array', () =>{
    expect(remove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(remove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(remove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

// 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado


const myFizzBuzz = require('./fizzBuzz');

describe('teste divisivel por 3 e 5', () => {
  it('verifica se o numero e divisivel por 3 e 5 e retorna fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
  })
  it('Verifica se e divisivel apenas por 3 e retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('Verifica se e divisivel apenas por 5 e retorna buzz', () => {
    expect(myFizzBuzz(35)).toBe('buzz');
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('verifica se numero nao divisivel por 3 e 5 retorna o proprio numero', () => {
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz(1)).toBe(1);
  })
  it('verifica se e  um numero a entrada se nao for retorna false', () => {
    expect(myFizzBuzz('5')).toBe(false);
    expect(myFizzBuzz('teste')).toBe(false);
  })
})

// 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// Copiar
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código .

const techList = require('./techList');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

