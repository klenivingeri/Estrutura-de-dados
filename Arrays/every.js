const text = 'intera pelos elementos do array até retornar false, pode usar a função every()'
const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const isEven = x => x % 2 === 0

const fEvery = () => {
  console.log(text)
  return arr.every(isEven)
}

module.exports = { fEvery }