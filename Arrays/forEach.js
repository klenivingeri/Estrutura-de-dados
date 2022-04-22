const text = 'Se precisar fazer interação em todo o array, independente de tudo mais, pode usar essa função forEach().'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

const item = x => console.log(x)

const fForEach = () => {
  console.log(text)
  arr.forEach(item)
}

module.exports = { fForEach }

