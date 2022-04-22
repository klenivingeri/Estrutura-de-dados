const text = 'Array não pode ser alterado, porem existe funções que devolvem um novo array com as alterações, nesse caso pede usar a função map().'

const arr =[1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const isEven = x => x % 2 === 0

const fMap = () => {
  console.log(text)
  return arr.map(isEven)
} 

module.exports = { fMap }