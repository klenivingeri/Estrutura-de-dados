const text = 'Ao contrario de every(), interar pelos elementos do array até retornar true, pode usar a função some()'

const arr =[1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const isEven = x => x % 2 === 0

const fSome = () => {
  console.log(text)
  return arr.some(isEven)
}

module.exports = { fSome }