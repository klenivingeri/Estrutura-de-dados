const text = 'copyWithin ajuda a realocar items no array, (indix onde queremor realocar, a partir de qual posicao queremos, até onde queremos)'

const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15]

const fCopyWithin = () => {

  return arr.copyWithin(0, 12, 14)
}


module.exports = { fCopyWithin }


