/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    let start = new Date().getTime();
    let curr = new Date().getTime();
    while (curr - start < milliseconds) {
      curr = new Date().getTime();
    }
    resolve();
  });
}

module.exports = sleep;
