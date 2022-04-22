const { defaultEquals } = require('../utils/defaultEquals.js');
const { Node } = require('./models/linked-list-models.js');

class LinkedList{
  constructor(equalFn, defaultEquals){
    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }
  push (element) { 
    const node = new Node(element);
    let current; //2
    if(this.head == null) {
      this.head = node;      
    } else {
      current = this.head;
      while(current.next != undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt (index) {
    if(index >= 0 && index < this.count) { // 1
      let current = this.head;  //2
      if(index === 0) { //3
       this.head = current.next;
      } else {
        let previous;
        for(let i = 0; i < index; i++){
          previous = current; 
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getElementeAt (index) {
    if(index >= 0 && index <= this.count){ //1
      let node = this.head;  //2
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  insert (element, index) {
    console.log(element)
    if (index >= 0 && index <= this.count) { //1
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); //3
        const current = previuous.next; // 4
        node.next = current; //5
        previous.next = node; // 6
      }
      this.count++ // atualiza o tam da lista
      return true;
    }
    return false; //7
  }
}

const list = new LinkedList()

list.push('1 - primeiro')
list.push('2 - segundo')
list.push('3 - terceiro')
list.push('4 - quarto')
console.log(list.insert('0 - zero', 0))
console.log(list.getElementeAt(0))




console.log('\x1b[39m%s\u001b[34m','Ponteiro', JSON.stringify(list, null, 2))


/**
 *  push - Esse método adiciona um novo elemento no final da list
 *  insert - Esse método insere um novo elemento em uma posição específica da lista.
 *  getElementeAt - Esse método devolve o elemento que está em uma posição específica da lista. Se o elemento não estiver na lista, undefined será devolvido
 *  remove - Esse método remove um elemento da lista.
 *  indexOf - Esse método devolve o índice do elemento na lista. Se o elemento não estiver na lista, -1 será devolvido.
 *  removeAt - Esse método remove um item de uma posição específica da lista.
 *  isEmpty - esse método devolve true se a lista ligada não contiver nenhum elemento, e false se o tamanho da lista ligada for mairo que 0.
 *  size - Esse método devolve o número de elementos contidos na lista ligada, É  semelhante á proriedade length do array
 *  toString Esse método devolve uma representação em string da lista ligada. Como a lista usa uma classe Node como elemento, devemos sobrescrever o método toString default herdado da classe Object de Javascript  a fim de exibir somente os valores dos elementos
 */
