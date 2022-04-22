const text = 'includes() retorna true se encontra o valor no arr e false caso contrario'

const arr = ['um', 'dois', 'três', 'quatro', 'cinco']

const fIncludes = () => { 
 if(arr.includes('quatro')){
   return true
 }
}

module.exports = { fIncludes }