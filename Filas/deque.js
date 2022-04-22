class Deque {
  constructor() {
    this.count = 0; // 1
    this.lowestCount = 0; // 2
    this.items = {} // 3
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0 ) {// 2
    this.lowestCount--;
    this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i-1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; //4
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    delete this.items[this.count];
    this.count--;
    return this.items[this.count];
  }
  peekFront() {
    if(this.isEmpty()){
      return console.log('A fila está vazia');
    }
    return this.items[this.count];
  }
  peekBack() {
    if(this.isEmpty()){
      return console.log('A fila está vazia');
    }
    return this.items[this.lowestCount];
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
  isEmpty() {
    return ((this.count - this.lowestCount) == 0);
  }
  clear() {

  }
  size(){
    return this.count - this.lowestCount;
  }
  obj(){
    console.log(this.items)
  }

}

// const deque = new Deque();

// deque.addBack('Paul')
// deque.addBack('Andrade')
// deque.addBack('Klenving')
// deque.addFront('Erick')
// deque.toString()
// deque.removeFront()
// deque.removeBack()
// deque.toString()

module.exports = Deque