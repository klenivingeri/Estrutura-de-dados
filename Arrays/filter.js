const text = 'Cria um novo array com os atributos de todas as condições que forem verdadeiras, pode usar a função filter().'

const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const isEven = x => x % 2 === 0

const fFilter = () => {
  console.log(text)
  return arr.filter(isEven)
}


module.exports = { fFilter }


// filtra e retorna  o obj
let array = [
  { "name": "Joe", "id": 17 },
  { "name": "Bob", "id": 17 },
  { "name": "Carl", "id": 35 },
  { "name": "Eric", "id": 35 }
];
    const items = new Map()
    const ordersDistinct = array.filter((order) => {
      if (!items.has(order.id)) {
        items.set(order.id, true)
        return order
      }
      return false
    })
    console.log(ordersDistinct)

