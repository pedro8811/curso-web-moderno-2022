const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
 
console.log(ferrari.__proto__) // acessar o protótipo desse objeto ( objeto pai )

console.log(ferrari.__proto__ === Object.prototype)