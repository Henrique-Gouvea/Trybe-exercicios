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
        birthYear: 1926,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1891,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1891,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  function authorBornIn1947() {
    const bookFind =  books.find((livros) => livros.author.birthYear === 1947);
    return bookFind;
  }

  console.log(authorBornIn1947());

  //2 - Retorne o nome do livro de menor nome.

  function smallerName() {
  let nameBook;
  books.forEach((livro) => {
    if (!nameBook || livro.name.length < nameBook.length){
      nameBook = livro.name;
    }
  });
  return nameBook;
  }
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  return books.find((livro) => livro.name.length === 26);
}

console.log(getNamedBook());

console.log('-------------------------------------4-----------------------------------------')

//4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((livroA, livroB) => livroA.releaseYear < livroB.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc());

console.log('-------------------------------------5-----------------------------------------')

//5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.//1 de janeiro de 1901 e terminou em 31 de dezembro de 2000

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((livros) => (livros.author.birthYear > 1901) && (livros.author.birthYear < 200));
}

console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.



function someBookWasReleaseOnThe80s() {
  return books.some((livros) => (livros.releaseYear > 1979) && (livros.releaseYear < 1990));
}

console.log (someBookWasReleaseOnThe80s());

console.log('-----------------------------------------------------')

//7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
  teste = false;
  books.every((livrosEvery) => {
    books.some((livros) => {
      if (((livros.author.birthYear === livrosEvery.author.birthYear) && (livros.author.name !== livrosEvery.author.name))){
       teste = true; 
      };
    })
  })
  return teste;
}

console.log(authorUnique());

