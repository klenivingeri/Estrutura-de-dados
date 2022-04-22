const { arr } = require('./arr.js')

const text = 'Para adicional um elemento na ultima posição do array, pode usar a função push()'

const fPush = x => {
  console.log(text)
  console.log(arr)
  arr.push(x)
  console.log(arr)
}

module.exports = { fPush }
