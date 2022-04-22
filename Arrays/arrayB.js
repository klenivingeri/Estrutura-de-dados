const text = 'Array Bidimensional soma, linha e coluna'


const hourTemp = []

/* pode se feito assim */
hourTemp[0] =  [34,35,37,39,32,35]
hourTemp[1] =  [32,25,27,29,22,25]

/* ou assim */
// hourTemp[0] = []
// hourTemp[0][0] = 38
// hourTemp[0][1] = 39
// hourTemp[0][2] = 37
// hourTemp[0][3] = 36
// hourTemp[0][4] = 39
// hourTemp[0][5] = 40
// hourTemp[0][6] = 39

// hourTemp[1] = []
// hourTemp[1][0] = 28
// hourTemp[1][1] = 29
// hourTemp[1][2] = 27
// hourTemp[1][3] = 26
// hourTemp[1][4] = 29
// hourTemp[1][5] = 20
// hourTemp[1][6] = 29

const fArrayB = () => {
  console.log(text)
  for(let i = 0 ; i < hourTemp.length ; i++ ){
 console.log(hourTemp[i])
    for(let j = 0 ; j < hourTemp[1].length ; j++ ){
      console.log(hourTemp[i][j])
    } 
  }
}

module.exports = { fArrayB }