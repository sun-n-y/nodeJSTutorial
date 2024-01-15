const { readFileSync, writeFileSync } = require('fs');
console.log('start');

//how to read from file system
//two args: path , the encoding: so node  knows how to decode

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

//create new file
// two args: file name (if file is not there, it will create one, if its there it will overwrite it), value you want to pass

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
console.log('done with task');
console.log('start next task');

// if you want to append to file: add third arg with object flag a
