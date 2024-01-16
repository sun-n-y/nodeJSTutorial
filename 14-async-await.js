const { readFile, writeFile } = require('fs').promises;

// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // only when promise is resolved you will get response
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/third.txt', 'third text file', { flag: 'a' });

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     //once file system responds we invoke cb
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
