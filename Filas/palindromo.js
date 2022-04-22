const Deque = require('./deque.js')

function palindromeChecker(aString) {
  if(aString === undefined || aString === null
    || (aString !== null && aString.length === 0)) {
      return false
    }
    const deque = new Deque(); //2
    const lowerString = aString.toLocaleLowerCase().split('').join('') // 3
    let isEqual = true
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
      deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) { //5
      firstChar = deque.removeFront() // 6
      lastChar =  deque.removeBack() // 7
      
      if (firstChar !== lastChar){
        isEqual = false //8
      }
    }
  return isEqual;
}

console.log('level',palindromeChecker('level'))
console.log('tes a set',palindromeChecker('tes a set'))
console.log('Erick',palindromeChecker('Erick'))
console.log('testando function',palindromeChecker('testando function'))

/* 
Um palíndromo é uma palavra, frase, numero ou outra sequência de caracteres que
é lido igualmente de trás para frente ou de frente para trás, por exemplo, MADAM
ou RACECAR 
*/