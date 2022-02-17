// 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
// Utilize o throw new Error e o bloco try/catch .
// Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
// Evite funções que tenham muitas responsabilidades distintas.
// 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
// Você pode fazer essa verificação utilizando a função isNan() .

function verifyTwoNumbers (v1, v2){
    if (v1 === '' || v2 === ''){
        throw new Error('Digite dois valores de entrada');
    }
};

function verifyString (v1, v2){
    if (typeof v1 !== 'number' || typeof v2 !== 'number'){
        throw new Error('O valor digitado não e um numero.');
    }
};

function sum() {
  try{
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyTwoNumbers(value1,value2);
    verifyString(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error){
    throw document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
