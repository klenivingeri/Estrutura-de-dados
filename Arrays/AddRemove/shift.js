const { arr } = require('./arr.js')

const text = 'Para remover um elemento na primeira posição do array, pode usar a função shift'

const fShift = () => {
  console.log(text)
  console.log(arr)
  arr.shift()
  console.log(arr)
}

module.exports = { fShift }