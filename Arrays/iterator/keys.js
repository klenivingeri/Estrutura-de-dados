const text = 'O método keys devolve @@iterator, que contém as chaves do array.'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

let aKeys = arr.keys()

const fKeys = () => {
  console.log(text)

  // for(const n of fKeys){
  //   console.log(n)
  // }
  
  console.log(aKeys.next())
  console.log(aKeys.next())
  console.log(aKeys.next())
  console.log(aKeys.next())
  console.log(aKeys.next())
  console.log(aKeys.next())

}

module.exports =  { fKeys }