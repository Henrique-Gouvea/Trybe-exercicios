// const nome = 'Henrque';
// let arra = ['Zenklub', 'CSS', 'HTML'];

function techList(arr, name) {
    if (arr.length === 0) return 'Vazio!';
    let obj = [];
    arr.sort();
    for (index = 0; index < arr.length; index += 1){
        console.log(name);
        console.log(arr[index]);
        obj.push({
          'tech': arr[index],
           'name': name,
        })
    }
    console.log(obj);
    return obj;
}
// techList(arra, nome);

module.exports = techList;