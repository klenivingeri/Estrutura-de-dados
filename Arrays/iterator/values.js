const text = 'O método values devolve @@iterator, que contém as values do array... quando done chega a false que dizer que não existe mais nada para interar'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

let aValues = arr.values()

const fValues = () => {
  console.log(text)

  // for(const n of fValues){
  //   console.log(n)
  // }
  
  console.log(aValues.next())
  console.log(aValues.next())
  console.log(aValues.next())
  console.log(aValues.next())
  console.log(aValues.next())
  console.log(aValues.next())
}

module.exports =  { fValues }