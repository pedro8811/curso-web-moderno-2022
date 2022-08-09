const pessoa = {
    nome: 'pedro',
    idade: 18,
    peso: 73
}

console.log(Object.keys('Chaves: ' + pessoa))
console.log(Object.values('Valores: ' + pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/08/2022'
})

console.log(pessoa.dataNascimento)

const dest = { a: 1 }  
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)