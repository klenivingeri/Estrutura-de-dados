const fText = (de, ateh) => `retorna o elemento apartir da posicao ${de} até ${ateh}`

const arr = ['primeira','segunda','terceiro','quarta','quinta']

const fSlice = (de, ateh) => {
  console.log(fText(de, ateh))
  console.log(arr)
  const newArr = arr.slice(de, ateh)
  console.log(newArr)
}

module.exports = { fSlice }