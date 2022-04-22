
const arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = []
const fSplice = (posicao, remove, ...add) => {
  console.log('remove')
  console.log(arr)
  newArr = arr.splice(posicao, remove)
  console.log('removeu do arr', newArr)
  console.log('sobrou no arr', arr)
  arr.splice(posicao, 0, ...add)
  console.log('adicionou', arr)
}

module.exports = { fSplice }