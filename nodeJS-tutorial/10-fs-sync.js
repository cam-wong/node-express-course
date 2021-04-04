const { readFileSync, writeFileSync } = require('fs');

// Same as the above code
// const fs = require('fs')
// fs.readFileSync

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(
  './content/third.txt',
  `Here is the result: \n${first}\n${second}`,
  { flag: 'a' },
);

console.log('done with this task');
console.log('starting the next one');
