const text = 'Transforma o array em string separando por algum caracter tipo : '

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

const fJoin = x => {
  console.log(text + x)
  const newArr = arr.join(x)
  console.log(newArr)
}

module.exports = { fJoin }