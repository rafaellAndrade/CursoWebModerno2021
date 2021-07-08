// Concat não altera os arrays originais e sim cria um novo array

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))