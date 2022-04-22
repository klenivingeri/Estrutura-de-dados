// Projeto não possui isEmpty, exemplo não pode ser testado
// Testando Hacks para tem propriedade private

const items = new WeakMap(); // 1

class Stack {
  constructor(){
    items.set(this, []) // 2
  }

  push(element){
    const s = items.get(this); // 3
    s.push(element);
  }

  pop(){
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}

console.log('WeakMap')
// Na linha { 1 }, declaramos a variável items como um WeakMap
// Na linha { 2 },  definimos o valor de items no constructor, especificando this (referência á classe Stack) como a chave do WeakMap e o aray que representa a pilha como o valor.
// Na linha { 3 }, obtiivemos o valor de items acessando o valor do WeakMap, isto  passando this como a chave ( que foi definida na linha {2}) 

function baseConverter(decNumber, base){
  const remStack = new Stack();
  const digits = '0123456789QWERTYUIOPASDFGHJKLÇZXCVBNM' // 6

  let number = decNumber;
  let rem;
  let binaryString = '';
  
  if(!(base >= 2 && base <= 36)){
    return '';
  }

  while(number > 0){ // 1
  rem = Math.floor(number %  base); //2
  remStack.push(rem); // 3
  number = Math.floor(number / base); // 4
  }
  
  while(!remStack.isEmpty){ // 5
  binaryString += digits[remStack.pop()] // 7
  }
 console.log(binaryString)
  return binaryString;
}

baseConverter(1000, 2);