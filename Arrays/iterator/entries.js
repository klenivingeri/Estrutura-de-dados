/*
Ser capaz de obter pares chave/valor será muito conveniente quando estivermos trabalhando com conjuntos, dicionários e mapas de hash(hasg maps)
*/
const text = 'O método entries devolve @@iterator, que contem pares chave/valor.'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

let aEntries = arr.entries()

const fEntries = () => {
  console.log(text)
  for(const n of aEntries){
    console.log('chave: ', n[0])
    console.log('valor:', n[1])
    console.log(n)
  }

}

module.exports =  { fEntries }