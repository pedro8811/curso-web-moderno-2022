// Object.preventExtensions { impede de criar novos atributos }
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha' // é válido
produto.descricao = 'Borracha escolar branca' // não é válido
delete produto.tag // é válido
console.log(produto) // excluir e alterar pode, adicionar não

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não é válido
delete pessoa.nome // não é válido
pessoa.idade = 29 // é válido
console.log(pessoa) // consegue alterar, mas adicionar e excluir não

// Object.feeze = selado + valores constantes {não pode excluir, adicionar ou alterar atributos}