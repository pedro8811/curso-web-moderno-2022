//-----------------------------------------------------------------------------------
//criando objeto com classe
class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    falar(som){
        console.log(`${this.nome} diz: ${som}, tenho ${this.idade} anos.`)
    }
}
const pedro = new Pessoa('Pedro', 18)
console.log(pedro)
pedro.falar('Olá')
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//criando objeto com função construtora
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
    this.explicar = function() { 
        console.log(`O nome do cachorro é ${this.nome}`) 
    }
}
const dog = new Cachorro('Rufus', 'Pitbull')
console.log(dog)
dog.explicar()
//-----------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------
//criando com função fábrica
function Produto(nome, preco){
    return {
        nome,
        preco
    }
}  
const camisa = Produto('camiseta', 20)
//-----------------------------------------------------------------------------------