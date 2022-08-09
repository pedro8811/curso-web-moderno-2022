function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)


//simulando o new
function novo(f, ...params){
    const obj = {} // criando um objeto vazio com notação literal
    obj.__proto__ = f.prototype // associando o prototype da função passada
    f.apply(obj, params) // executar a função f com o objeto de contexto criado
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)