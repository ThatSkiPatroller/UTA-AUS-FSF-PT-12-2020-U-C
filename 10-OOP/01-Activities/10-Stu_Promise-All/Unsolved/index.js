const apiCallDurations = [3000, 4000, 5000, 6000, 10000]; // can add 10000 and see error thrown
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
      if (duration > maxDuration) {
        reject(new error ('This request timed out'));
      // TODO: Otherwise resolve() the promise
      } else {
        resolve(`Response received: ${duration} ms`)
      }
    }, duration);
  });

const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });