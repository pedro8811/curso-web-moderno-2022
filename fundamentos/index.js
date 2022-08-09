const pessoa = {
    nome: 'Pedro',
    idade: 18
}

function deleteProp(obj, prop){
    delete (obj.prop);
    return obj
}

console.log(deleteProp(pessoa, pessoa.nome))