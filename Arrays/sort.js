const text = 'Sort, recebe uma função interna compareFunction, que retorna uma lista em ondem crescente, b > a = -1 | b < a = 1 | b == a = 0  '
const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15]
const alf = ['f','g','j','t','v','b','c','d','a','h','i']
const arr1 = [
  {
    p1: 10,
    p2: 20,
  },
  {
    p1: 25,
    p2: 15,
  },
  {
    p1: 5,
    p2: 20,
  },
  {
    p1: 21,
    p2: 20,
  }
]

arr.reverse()

const fSort = () => {
  console.log(text)
 return arr.sort((a,b) => a - b)
}

const fSort1 = () => {
  console.log(text)
  return arr1.sort((a,b) => a.p1 - b.p1)
}

const fSort2 = () => {
  console.log(text)
  return alf.sort((a,b) =>{
    if(b.toLowerCase() > a.toLowerCase()){
      return -1
    }
    if(b.toLowerCase() < a.toLowerCase()){
      return 1
    }
    return 0
  })
}

const fSort3 = () => { // letras minusculas e acentos na frente
  return arr.sort((a,b) => a.localeCompare(b))
}

module.exports = { fSort, fSort1, fSort2 }