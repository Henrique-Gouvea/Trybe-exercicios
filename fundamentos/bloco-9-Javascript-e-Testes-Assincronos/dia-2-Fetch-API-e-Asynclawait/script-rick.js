// https://rickandmortyapi.com/api

async function fetchResp(resp){
  if(!resp.ok) throw new Error ('erro')
  const respApi = await resp.json();
  return respApi;
}

const card  = ({name, image}) => {
  const charImg = character.image
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src = image
  const h3 = document.createElement('h3');
  div.appendChild(img)
  div.appendChild(h3)
}

const fetchAPI = async () => {
  try{  
  const resp = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await fetchResp(resp)
  return characters
  }catch(err) {
    alert(err.message)
  }
}