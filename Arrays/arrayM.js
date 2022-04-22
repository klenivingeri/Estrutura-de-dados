const text = 'Array Multidimensional soma linha, colun e profundidade.'

const matrix3x3x3 = []

for(let i = 0; i< 3; i++){
  matrix3x3x3[i]= []
  for(let j = 0; j< 3; j++){
    matrix3x3x3[i][j]= []
    for(let z = 0; z< 3; z++){
      matrix3x3x3[i][j][z] = i + j + z
    }
  }
}

const fArrayM = () => {
  console.log(text)
  for(let i = 0 ; i < matrix3x3x3.length ; i++ ){
    
    for(let j = 0 ; j < matrix3x3x3[i].length ; j++ ){
      
      for(let z = 0 ; z < matrix3x3x3[i][j].length ; z++ ){
        console.log(matrix3x3x3[i][j][z])
      } 
    } 
  }
}

module.exports = { fArrayM }