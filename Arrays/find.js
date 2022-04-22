const text = 'find retorna o valor que satisfaz a condição '

const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15, 'azul']

const multipleOf13 = (elem, index, array) => {
  return (elem == 'azul')
}
const fFind = () => {
  return arr.find(multipleOf13)
}

module.exports = { fFind }