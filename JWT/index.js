const { sign } = require('./jwt.js')
const { destruct } = require('./revertJWT.js')

const body = {
  login: 'Erick',
  senha: 2924,
}

destruct(sign(body))