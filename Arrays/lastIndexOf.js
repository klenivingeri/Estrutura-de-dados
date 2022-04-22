const text = 'Devolve o index do ultimo elemento encontrado, se não encontrar devolve -1'
  const arr = ['um', 'dois', 'três', 'quatro', 'cinco', 'quatro']

const fLastIndexOf = (x) => {
  console.log(text)
  //return  arr.indexOf(x)
  return arr.lastIndexOf(x)
}
module.exports = { fLastIndexOf }