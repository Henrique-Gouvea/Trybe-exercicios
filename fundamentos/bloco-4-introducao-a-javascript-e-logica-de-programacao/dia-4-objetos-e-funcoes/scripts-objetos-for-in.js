console.log("-------------------------Exercicio -1 --------------------------- ");


let info = 
    {   personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };


  console.log("Welcome, " + info.personagem);

  console.log("-------------------------Exercicio -2 --------------------------- ");

  info.recorrente = "sim";

  console.log(info);


  console.log("-------------------------Exercicio -3 --------------------------- ");

  for (let i in info){
      console.log(i);
  }

  console.log("-------------------------Exercicio -4 --------------------------- ");

  for (let i in info){
      console.log(info[i]);
  }


  console.log("-------------------------Exercicio -5 --------------------------- ");

  info2={ 
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
   };

   for(let i in info){
       if (i==="recorrente" && info.recorrente===info2.recorrente){
           console.log("Ambos sao recorrentes");
       }
       else{
           console.log(info[i] + " , " + info2[i]);
       }
   };


   console.log("-------------------------Exercicio -6 --------------------------- ");


   let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
    ]
  };

  leitor.fullname= leitor.nome+" "+leitor.sobrenome;
  console.log("O livro de " + leitor.fullname + " se chama " + leitor.livrosFavoritos.titulo + ".");


 
 console.log("-------------------------Exercicio -8 --------------------------- ");


console.log("Julia tem "+ leitor.livrosFavoritos.length +" livro(s) favorito(s)")
