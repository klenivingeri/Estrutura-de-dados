// Batata quente ou Hot Potato é um dos problemas de ciencia da computação.

class Queue {
  constructor() {
    this.count = 0; // 1
    this.lowestCount = 0; // 2
    this.items = {} // 3
  }
  enqueue(element){
    this.items[this.count] = element;
    this.count++;
  }
  dequeue(){
    if(this.isEmpty()){
      return console.log('A fila está vazia');
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result
  }
  peek(){
    if(this.isEmpty()){
      return console.log('A fila está vazia');
    }
    return this.items[this.lowestCount];
  }
  isEmpty(){
    //return this.size() === 0;
    return ((this.count - this.lowestCount) == 0);
  }
  size(){
    return this.count - this.lowestCount;
  }
  toString(){
    if(this.isEmpty()){
      return 'A fila está vazia';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i< this.count; i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return console.log(objString);
  }
}

function hotPotato(elementsList, num) {
 const queue = new Queue(); //1
 const eliminatedList = [];
 for (let i = 0; i < elementsList.length; i++) {
   queue.enqueue(elementsList[i]) // 2
 }
 while(queue.size() > 1 ){
    for ( let i = 0; i< num; i++) {
      queue.enqueue(queue.dequeue())/ 3
    }
    eliminatedList.push(queue.dequeue());
 }
 return {
   eliminated: eliminatedList,
   winner: queue.dequeue() // 5
 }
}

const name = ['Erick', 'Jhon', 'Jack', 'Jesus']
const result = hotPotato(name, 4)
console.log(result)
result.eliminated.forEach(name => {
  console.log(`${name} eliminated from the Hot Potato Game`)
})