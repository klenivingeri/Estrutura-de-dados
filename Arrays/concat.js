
const fConcat = () => {
let negativeNumber = [-4,-3,-2,-1]
let positiveNumber = [1,2,3,4]
let arrZero = [0]

let arr = negativeNumber.concat(arrZero, positiveNumber)
console.log('Para "concatenar" array pede usar a função concat()')
console.log('Concatena negativeNumber com arrZero e positiveNumber')
console.log('Retornando 1 array inteiro')
console.log(arr)

}
module.exports = { fConcat }