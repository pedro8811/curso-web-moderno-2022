const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]
pilotos.pop() //remove o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0, 'Botas', 'Massa') // adiciona 2 elementos a partir do indice 2
console.log(pilotos)

//remover
pilotos.splice(3,1) //remover 1 elemento do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)//do indice 1 até o anterior ao indice 4
console.log(algunsPilotos2)