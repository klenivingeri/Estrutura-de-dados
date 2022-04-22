const text = 'O array terá todas as posições preencido com os parametros passados'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']
const fFill = (x) => {
  console.log(text)
  // arr.fill(x) todos
  // arr.fill(x, 2) apartir da posição 2
  return arr.fill(x, 2,4) // entre 2 e 4
}

module.exports = { fFill }
