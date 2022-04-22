const JWT = require('jsonwebtoken');

const sign = ({login, senha}) => {
  const secretKey = process.env['secretKey']
  const token = JWT.sign({
    customer: {
      login,
      senha
    }
  }, secretKey, {
    expiresIn: '1d'
  });
  console.log(token)
  return token;
};

module.exports = { sign }

