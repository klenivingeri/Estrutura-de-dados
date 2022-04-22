const text = 'Para pegar um elemento e juntar com o proximo, pode usar a função reduce()'

const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const isEven = (prev, current ) => prev + current 

const fReduce1 = () => {
  console.log(text)
  console.log(arr.reduce(isEven, 0))
  return arr.reduce(isEven, 0)
}


const arrObj =[
  { age: 10 },
  { age: 10 },
  { age: 10 },
  { age: 10 }
]
const total = (total, item) => total + item.age

const fReduce = () => {
  console.log(text)
  console.log(arrObj.reduce(total, 0))
  return arrObj.reduce(total, 0)
}

module.exports = { fReduce }