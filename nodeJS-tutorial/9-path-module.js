const path = require('path');

console.log(path.sep);

// We get a normalised path when using join, so if we have trailing separators
// or multiple separators then they are removed
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');

console.log(absolute);
