const { readFile, writeFile } = require('fs');
console.log('start');
//async needs a cb function

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('start next task');
