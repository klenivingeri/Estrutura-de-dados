module.exports = class Deque {
  constructor() {
    this.count = 0; // 1
    this.lowestCount = 0; // 2
    this.items = {} // 3
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('A fila está vazia');
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return console.log(result);
  }
  peek() {
    if (this.isEmpty()) {
      return console.log('A fila está vazia');
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    //return this.size() === 0;
    return ((this.count - this.lowestCount) == 0);
  }
  size() {
    return this.count - this.lowestCount;
  }
  toString() {
    if (this.isEmpty()) {
      return 'A fila está vazia';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return console.log(objString);
  }
}

// const nQ = new Deque;

// nQ.enqueue('Arroz')
// nQ.enqueue('Bacon')
// nQ.enqueue('Carne')
// nQ.size()
// nQ.dequeue()
// nQ.toString()
