const contaBtn = document.getElementById('conteinar-btn');
const contaPoke = document.getElementById('container-poke');

//erro fetch
async function fetchResp (resp) {
    if(!resp.ok) throw new Error('ocorreu um erro com a requisição')
    const respApi = await resp.json();
    return respApi
  }

  //requisita api

  const fetchApi = async (url) => {
    try {
      const resp = await fetch(url);
      const respApi = await fetchResp(resp)
      return respApi
    }catch(err) {
      alert(err.message)
    }
  }

  //cria pagcharacter
  const createPage = async (url='https://pokeapi.co/api/v2/pokemon/ditto') => {
  const { results, info: { next, prev }} = await fetchApi(url)
  content.innerHTML = ''
  results.forEach((char) => {
    const card = createCard(char)
    content.appendChild(card)
  })}
