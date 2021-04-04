// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page');
//   } else if (req.url === '/about') {
//     res.end('About Page');
//   } else {
//     res.end('Error Page');
//   }
// });

// server.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });

const { readFile, writeFile } = require('fs');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

const start = async () => {
  try {
    const first = await readFilePromise('../content/first.txt', 'utf8');
    const second = await readFilePromise('../content/second.txt', 'utf8');
    await writeFilePromise('../content/output.txt', `${first}\n${second}`);
    // console.log(first);
    // console.log(second);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
