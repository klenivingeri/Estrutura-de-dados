const { arr } = require('./arr.js')

const text = 'Para adicionar um elemento na primeira posição do array, pode usar a função unshift'

const fUnshift = x => {
  console.log(text)
  console.log(arr)
  arr.unshift(x)
  console.log(arr)
}

module.exports = { fUnshift }