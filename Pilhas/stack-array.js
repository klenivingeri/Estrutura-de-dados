class Stack {
  constructor() {
    this.items = []
  }

  push(element) { // add 
    this.items.push(element);
  }
  pop() { // remove
    this.items.pop();
  }
  peek(){ // retorna o ultimo elemento inserido
    return this.items[this.items.length -1];
  }
  isEmpty() { //verifica se é vazio
    return this.items.length === 0;
  }
  size() {// verifica o tamanho da list
    return this.items.length;
  }
  clear() { // zera a lista
    this.items = [];
  }

}

const stack = new Stack()


stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty())
stack.push(15);
stack.pop();
stack.pop()
console.log(stack.size());