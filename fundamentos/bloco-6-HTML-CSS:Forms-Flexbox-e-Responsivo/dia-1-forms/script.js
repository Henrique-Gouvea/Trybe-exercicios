const arrayEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const inputEstados = document.getElementById("input-estado");
const btnEnviarEmprego = document.getElementById("btn-enviar-emprego");
const btnEnviarDados = document.getElementById("btn-enviar-dados");
const btnLimpar = document.getElementById('clear');
let divDados = document.getElementById('dados');
const divEmprego = document.getElementById('emprego');
const formEmprego = document.getElementById('form-emprego');
let nome, email, cpf, end, cid, est, tipoResidencia, resumo, cargo, descricaoCargo, dataInicio = '';
let dadosBaseUser = [];
const dadosBase = ['Nome: ','E-mail: ','CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Tipo de Residencia: ', 'Resumo Experiencia: ','Cargo: ', 'Descrição do cargo: ', 'Data de Inicio: ']

function addEstadosInput(){
    for (let i = 0; i < arrayEstados.length; i += 1) {
        options = document.createElement("option");
        options.innerText = arrayEstados[i];
        options.value = arrayEstados[i].toLowerCase();
        inputEstados.appendChild(options);
    }
}

addEstadosInput();

function enviar(){
    event.preventDefault();
    nome = document.getElementById('nome-completo').value;
    email = document.getElementById('email').value;
    cpf = document.getElementById('cpf').value;
    end = document.getElementById('end').value;
    cid = document.getElementById('cidade').value;
    est = document.getElementById('input-estado').value;
    if (document.getElementById('tipo1').checked){
        tipoResidencia = 'Casa'; 
    } else {
        tipoResidencia = 'Apartamento';
    }
    resumo = document.getElementById('resumo1').value;
    cargo = document.getElementById('input-cargo').value;
    descricaoCargo = document.getElementById('input-descricao').value;
    dataInicio = document.getElementById('data-inicio').value;
    dadosBaseUser = [nome, email, cpf, end, cid, est, tipoResidencia, resumo, cargo, descricaoCargo,dataInicio]
    mostra();
}

btnEnviarEmprego.addEventListener('click', enviar);

function mostra(){
    divDados.innerText = '';
    let h3 = document.createElement('h3');
    h3.innerText = 'Curriculo';
    divDados.appendChild(h3);
    for (let i = 0; i < dadosBase.length; i += 1) {
        const paragrafo = document.createElement('p');
        paragrafo.innerText = dadosBase[i] + dadosBaseUser[i];
        divDados.appendChild(paragrafo);
    }
}

function limpar(){
    divDados.innerText = '';
    document.getElementById('nome-completo').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('end').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('input-estado').value = '';
    document.getElementById('tipo1').checked = true;
    document.getElementById('resumo1').value = '';
    document.getElementById('input-cargo').value = '';
    document.getElementById('input-descricao').value = '';
    document.getElementById('data-inicio').value = '';
}

btnLimpar.addEventListener('click', limpar);