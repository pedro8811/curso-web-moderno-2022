function Pessoa() {
    this.idade = 0
    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

function Teste() {
    this.num = 1
    setInterval( function() {
        this.num++
        console.log(this.num)
    }, 1000)
}
new Teste