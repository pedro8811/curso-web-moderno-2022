function Carro(velocidadeMax = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual())