const text = 'A classe array tem uma propriedade chamada @@iterator, introduzida na ES2015'
const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

  let iterator = arr[Symbol.iterator]()

  //console.log(iterator.next().value)
  //console.log(iterator.next().value)
  //console.log(iterator.next().value)

const fIterator = () => {
  console.log(text)
  for(const n of iterator){
    console.log(n)
  }

}

module.exports =  { fIterator }