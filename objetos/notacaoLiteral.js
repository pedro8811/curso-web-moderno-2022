const a = 1
const b = 2
const c = 3

const obj1 = { a, b, c }

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj2 = {}
obj2[nomeAttr] = valorAttr
console.log(obj2)

const obj3 = {[nomeAttr]: valorAttr}
console.log(obj3)

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){

    }
}