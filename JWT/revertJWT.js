const JWT = require('jsonwebtoken');

const destruct = (authorization) =>{
const secretKey = process.env['secretKey']
const { customer } = JWT.verify(authorization.split(' ').pop(), secretKey);
console.log(customer)
return customer
}

module.exports ={  destruct }

