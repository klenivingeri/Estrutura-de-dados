console.time('tirar tara')
const queimaTempoDeInicio = 10 * 10
console.timeEnd('tirar tara')

// Se hover um valor repidido não deve mostrar

// Map -> Filter: 0.054ms -  Mais lento
console.time('Map -> Filter')
let array = [
  { "name": "Joe", "age": 17 },
  { "name": "Bob", "age": 17 },
  { "name": "Carl", "age": 35 },
  { "name": "Eric", "age": 35 }
];
const arr3 = array.map(item => item.age)
  .filter((value, index, self) => self.indexOf(value) === index )
  //console.log(arr3)
console.timeEnd('Map -> Filter')

// Dicionary: 0.014ms - Mais rápido
console.time('Dicionary')
var arr = [{"name":"Joe", "age":17}, {"name":"Bob", "age":17}, {"name":"Carl", "age": 35}];
var unique = [];
var distinct = [];
for( let i = 0; i < arr.length; i++ ){
  if(!unique[arr[i].age]){
    distinct.push(arr[i].age);
    unique[arr[i].age] = 1;
  }
}
//console.log(distinct)
console.timeEnd('Dicionary')

console.time('retorna obj')

const arr2 = [
    { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
    { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
    { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
    { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
  ];
const result = [];

const map = new Map();
for (const item of arr2) {
    if(!map.has(item.id)){
        map.set(item.id, true);    // set any value to Map
        result.push({
            id: item.id,
            name: item.name
        });
    }
}
console.log(result)
console.timeEnd('retona obj')