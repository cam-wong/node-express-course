// local we don't want to share the secret variable with other files
const secret = 'SUPER SECRET';
const john = 'john';
const peter = 'peter';

console.log(module);
module.exports = { john, peter };
