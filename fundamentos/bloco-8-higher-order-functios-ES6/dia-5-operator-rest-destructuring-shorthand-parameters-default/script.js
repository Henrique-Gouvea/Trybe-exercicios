const objInicial = {N: [{}], SE: [{}], NE: [{}], S: [{}] };
const funcParam = (param, reg) => {
(objInicial[reg]).map((elem) => elem.city = param);
return objInicial
}

console.log(funcParam('Manaus', 'N'));
console.log(funcParam('Lavras', 'SE'));