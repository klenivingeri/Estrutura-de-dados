const text = 'Retornar o valor primitivo'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

const fValueOf = () => {
  console.log(text)
  const newArr = arr.valueOf()
  console.log(newArr)
}

module.exports = { fValueOf }