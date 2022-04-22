//const { } = require('./newURL.js')
//const { } = require('./url.js')
//const { } = require('./hostname')
const { ENDPOINT } = require('./testRequire')

const data = {
  textHeader: 'description',
  ticketNumber: '1234',
  motive: 'motive',
  client: {
    name: 'client',
    email: 'test@test.com',
  }
}

const {
  client
} = data

let nome = 'KONG'
console.log(client)
console.log(ENDPOINT[nome])