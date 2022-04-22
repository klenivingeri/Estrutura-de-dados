
const hora = "20-30-00Z"

const cuttingTime = (time) => {
const hours = time.substr(0,8).split('-')
const date = new Date()
const dateHours = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  ...hours)
return dateHours;
}
//ou
const calc = (date) => {
const dateSplit = date.split("-")

const current = new Date()
const [ first = "00", second = "00" ] = dateSplit

current.setHours(first, second)
current.setHours(current.getHours() - 3)
return current;
}
//ou
const calcTime = (time) => {
  let [hour, minute] = time.split('-');
  hour = parseInt(hour) - 3;
  hour = hour < 0
    ? 24 + hour
    : hour;
  
  return `${hour}:${minute}`
}

console.log(calc(hora))
console.log(calcTime(hora))
console.log(cuttingTime(hora))
