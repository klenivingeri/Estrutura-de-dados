const { arr } = require('./arr.js')

const text = 'Para remover o ultimo elemento do Array, pode usar a função pop()'

const fPop = () => {
  console.log(text)
  console.log(arr)
  arr.pop()
  console.log(arr)
}

module.exports = { fPop }
