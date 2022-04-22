const Orders = [
  [{"pessoa": { "name": "Joe", "age": 17, "haha": 17 }}],
  [{"pessoa": { "name": "Bob", "age": 17, "haha": 17 }}],
  [{"pessoa": { "name": "Carl", "age": 35, "haha": 17 }}],
  [{"pessoa": { "name": "Eric", "age": 35, "haha": 17 }}]
]


function extractInfo(subOrder) {

  return subOrder.map(({ pessoa: { name = '', age } }) => ({
    name,
    age,
  }))
}

function flattenSubOrders(subOrders) {
  return subOrders.reduce((acc, subOrder) => acc.concat(extractInfo(subOrder)), [])
}

console.log(flattenSubOrders(Orders))

/*
  Pega varios arrays e transforma em um unico array de obj  
*/