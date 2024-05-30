// Promises
const promise = new Promise((resolve, reject) => {
  const x = 3 + 3;
  if (x > 6) {
    resolve('the promise was fulfilled');
  } else {
    reject(Error('the promise was rejected'));
  }
});

promise.then((value) => {
  console.log(value);
}).catch((value) => {
  console.log(value);
});
