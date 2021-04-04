// Modules
const names = require('./4-names');
const utils = require('./5-utils');
const data = require('./6-alternative-flavour');
// When the require() is called the code is actually wrapped and is executed,
// that is why if there is a call to the function in the exported module it will
// be executed
require('./7-mind-grenade');
const { john, peter } = names;
const { sayHi } = utils;

// console.log(names)
// console.log(utils)
// console.log(data)
sayHi('Susan');
sayHi(john);
sayHi(peter);
