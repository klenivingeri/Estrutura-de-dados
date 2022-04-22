const text = 'Transforma o array em string'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

const fToString = () => {
  console.log(text )
  const newArr = arr.toString()
  console.log(newArr)
}

module.exports = { fToString }