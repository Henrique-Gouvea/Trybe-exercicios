const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  function formatedBookNames() {
    
  }

  const nomeGeneroAutor = books.map((nameBook) => `${nameBook.name} - ${nameBook.genre} - ${nameBook.author.name}`);

  console.log(nomeGeneroAutor);

// ------------------------------------------------------------------------------------------------

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

console.log('----------------------------------------------------------------------')

// function nameAndAge() {
//     const name = books.map((livros) => {
//         return {
//          autor: livros.author.name,
//          age: 2022 - livros.author.birthYear,
//         },
//     });
//     return name;
// };

// console.log(nameAndAge());

function nameAndAge(livros) {
    return(
       {
        autor: livros.author.name,
        age: 2022 - livros.author.birthYear,
       })
};

console.log(books.map(nameAndAge).sort((obj1, obj2) => obj1.age - obj2.age));

//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

console.log('---------------------------------------------------------------------------------')

function fantasyOrScienceFiction(livros) {
    return livros.genre === 'Fantasia' || livros.genre === 'Ficção Científica';
  }

  const filmesFiccaoFantasia = books.filter(fantasyOrScienceFiction);

  console.log(filmesFiccaoFantasia);

  console.log('--------------------------------------------------------------------------------')

//   4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const sixtyMore = (livros) => (2022 - livros.releaseYear) > 60;

const moreSixtyYears = books.filter(sixtyMore).sort((livroA, livroB) => livroA.releaseYear - livroB.releaseYear);

console.log(moreSixtyYears);

console.log('--------------------------------------------------------------------------------')

//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const alphabeticFantasyFictionAuthor = filmesFiccaoFantasia.map((livros) => livros.author.name).sort();

console.log(alphabeticFantasyFictionAuthor);

console.log('--------------------------------------------------------------------------------')

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const nameSixtyMore = moreSixtyYears.map((livros) => livros.name);

console.log(nameSixtyMore);

console.log('--------------------------------------------------------------------------------')

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).