const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

let vInicial = 0

console.log(alunos.map(a => a.nota)) // [ 7.3, 9.2, 9.8, 8.7 ]

const resultado = alunos.map(a => a.nota).reduce(function(acc, atual){
    console.log(acc, atual)
    return acc + atual
}, vInicial)
console.log(resultado)