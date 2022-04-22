// troca uma palavra pela outra no dominio

// Exempro 1
const subDominio = 'meuespaco,minhaconta'
const dominio = 'http://meuespaco.com.br'
const newDominio = dominio.replace(...subDominio.split(','))
console.log(newDominio)

// Exempro 2
var dominio2 = 'http://meuespaco.com.br';
var newDominio2 = dominio2.replace(/meuespaco/i, 'minhaconta')
console.log(newDominio2)

const obj = new URL('https://developer.mozilla.org/');
console.log(obj)