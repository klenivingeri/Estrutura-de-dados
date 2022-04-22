// Alterando os parametros protocol e hostname da url  urlCustomGoogle
const urlD = 'https://developer.mozilla.org/'
const urlG = 'https://www.google.com/'

const urlCustomDeveloper = new URL(urlD);

const urlCustomGoogle = new URL(urlG);

const {protocol, hostname } = urlCustomDeveloper

urlCustomGoogle.protocol = protocol
urlCustomGoogle.hostname = hostname

console.log(urlCustomGoogle)