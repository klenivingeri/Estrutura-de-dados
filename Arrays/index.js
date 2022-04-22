const { fConcat } = require('./concat.js')
const { fEvery } = require('./every.js')
const { fSome } = require('./some.js')
const { fForEach } = require('./forEach.js')
const { fMap } = require('./map.js')
const { fFilter } = require('./filter.js')
const { fReduce } = require('./reduce.js')
const { fArrayB } = require('./arrayB.js')
const { fArrayM } = require('./arrayM.js')
const { fJoin } = require('./join.js')
const { fToString } = require('./toString.js')
const { fReverse } = require('./reverse.js')
const { fSlice } = require('./slice.js')
const { fValueOf } = require('./valueOf.js')
const { fCopyWithin } = require('./copyWithin.js')
const { fSort, fSort1, fSort2 } = require('./sort.js')
const { fFill } = require('./fill.js')
const { fIndexOf } = require('./indexOf.js')
const { fLastIndexOf } = require('./lastIndexOf.js')
const { fFind } = require('./find.js')
const { fFindIndex } = require('./findIndex.js')
const { fIncludes } = require('./includes.js')

const { fIterator } = require('./iterator/iteratorObj.js')
const { fEntries } = require('./iterator/entries.js')
const { fKeys } = require('./iterator/keys.js')
const { fValues } = require('./iterator/values.js')

const { fPop } = require('./AddRemove/pop.js')
const { fPush } = require('./AddRemove/push.js')
const { fShift } = require('./AddRemove/shift.js')
const { fUnshift } = require('./AddRemove/unshift.js')
const { fSplice } = require('./AddRemove/splice.js')


//const {  } = require('./combine/map-filter.js')
const { } = require('./combine/map-reduce')


/** 'Interage' com a lista de array */
//fArrayB() // Array Bidimensional
//fArrayM() // Array Multidimensional
//fConcat() // Junta 2 arrays em 1
//fEvery() // percorre o array até a condição retonar false
//fSome() // percorre o array até a condição retonar true
//fForEach() // percorre pelo array
//fMap() // retorna um novo array
// fFilter() // Cria um arrar apartir das condições que retornam true
//fReduce() // Soma o array
//fJoin('--') // transforma array em string separando onde esta a virgula
//fToString() // transforma o array em string com virgula
//fReverse() // inverte o array
//fSlice(1, 3) // retonar o elemento da posição 1 até a 3
//fValueOf() // retonar o valor primitivo
//fSplice(1, 4, 2,3,4,5) // remove elementos da posição 1 até a 4, e insere o proximos valores nas posições
//fCopyWithin() 
//fSort() //array simples ,  ordem crescente
//fSort1() array de obj do ordem crescente
//fSort2() // arry de string do ordem crescente
//fFill('x') // pode substituir todos os valores
// fIndexOf('quatro') //  retornando o index do 1º elemento encontrado
//fLastIndexOf('quatro') // retornando o index do ultimo elemento encontrado
//fFind() //retorna o valor do elemento que satisfez a condição
//fFindIndex() // retorna o index do elemento que satisfez a condição
//fIncludes() // retorna true se encontrar o valor no arr

/** @@iterator */
//fIterator()
//fEntries()
//fKeys()
//fValues()


/** Adiciona ou Remove do Array */
//fPop() // remove elemento da ultima posição do array
//fPush('seis') // adiciona um elemento na ultima posição do array
//fShift() // remover um elemento na primeira posição do array
//fUnshift('zero') // adicionar um elemento na primeira posição do array