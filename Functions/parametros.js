const aluno = {
  name: 'Erick',
  age: 10
}
const professor = {
  name: 'João',
  age: 10
}

const showMan = ({ aluno, professor }) => {
  const name = aluno ? aluno.name : professor.name
  if(name){
    console.log(name)
  }
  return false;
}

showMan({professor})