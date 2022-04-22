const key = 'log'


console[key]('hahaha')

const obj = {
  [key]: () => { console.log('teste')}
}

obj[key]()