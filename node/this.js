/*console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

// this dentro de uma função aponta pra GLOBAL
// this fora de uma função aponta pra module.exports / exports
  
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true
}

logThis()*/

const person = {
    firstName: 'Pedro',
    lastName: 'Matos'
}

function fullNameFn(){
    return this
}
const boundFullNameFn = fullNameFn.bind(person)

const fullNameArrow = () => this
const boundFullNameArrow = fullNameArrow.bind(person)

console.log(boundFullNameFn() === this)
console.log(boundFullNameArrow() === this)
