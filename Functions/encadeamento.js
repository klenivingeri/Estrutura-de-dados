class Name{
  constructor(){
    this.abcdario = ''
  }
  a(){
    this.abcdario += '1 - 2 - 3 - '
    return this
  }
  b(){
    this.abcdario += '4 - 5 - 6 - '
    return this
  }
  c(){
    this.abcdario += '7 - 8 - 9 - '
    return this
  }
  d(){
    this.abcdario += '10 - 11 - 12'
    return this
  }
  adcdef(){
    console.log(this.abcdario)
    return this
  }
}

const test = new Name()
  test.a()
  .b()
    .c()
  .d()
  .adcdef()
