// let const
{
    var a = 2
    let b = 3
    console.log(b) // 3
}
console.log(a) // 2
//console.log(b) b is not defined

// template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: alias, nome } = { nome: 'Pedro', idade: 18 }
console.log(alias, nome)