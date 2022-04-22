
let val1 =  {
  err: 'Erro 400',
  str: 'Erro 400'
}
let val2 = {
  err: 'Erro 500',
  str: 'Erro 500'
}

function feedback1({ ...data }) {
  console.log(data)
  const pega = data.err
    ? data.err
    : data.str
  
  console.log(pega)
/*
{ err: 'Erro 400', str: 'Erro 400' }
Erro 400
*/
}

function feedback2(data) {
  console.log(data)
  const pega = data.err
    ? data.err
    : data.str
  
  console.log(pega)
/*
{ err: 'Erro 400', str: 'Erro 400' }
Erro 400
*/
}

function feedback3(...data) {
  console.log(data)
  const pega = data.err
    ? data.err
    : data.str
  
  console.log(pega)
/*
[
  { err: 'Erro 400', str: 'Erro 400' },
  { err: 'Erro 500', str: 'Erro 500' }
]
undefined
*/
}

feedback1(val1,val2)
feedback2(val1,val2)
feedback3(val1,val2)