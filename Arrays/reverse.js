const text = 'Para inverte o Array, pode usar a função reverse()'

const arr = [1,2,3,4,5]

const fReverse = () => {
  console.log(text)
  console.log(arr)
  const newArray = arr.reverse()
  console.log(newArray)
}

module.exports = { fReverse }