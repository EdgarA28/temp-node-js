

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alt-flavor')

require('./mind-grenade')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(data)

