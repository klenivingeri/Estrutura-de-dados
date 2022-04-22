class Stack{
  constructor() {
    this.count = 0;
    this.items = {};
  }

push(element) {
  this.items[this.count] = element;
  this.count++;
}
size() {
  return this.count;
}
isEmpty() {
  return this.count === 0;
}

pop() {
  if(this.isEmpty()) {
    return undefined;
  }
this.count--;
const result = this.items[this.count];
delete this.items[this.count];
return result;
}
peek() {
  if(this.isEmpty()){
    return undefined;
  }
  return this.items[this.count -1];
}

clear() {
 // this.items = {}
 // this.count = 0;

 while(!this.isEmpty()) {
   this.pop()
 }
}

toString() {
 if(this.isEmpty()){
   return '';
 }
 let objString = `${this.items[0]}`;

 for(let i = 1; i < this.count; i++){
   objString = `${objString}, ${this.items[i]}`;
 }
 return objString
}
}

const stk = new Stack()
console.log(Object.getOwnPropertyNames(stk))
console.log(Object.keys(stk));
console.log(stk.items)
stk.push(5)
stk.push(8)
stk.push(10)
stk.push(15)

console.log(stk.toString());
