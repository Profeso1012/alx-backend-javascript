export default function handleResponseFromAPI(promise) {
  return promise
<<<<<<< HEAD
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
=======
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
>>>>>>> 2c31646cfdd81f58c54e9353665ab5cbb8a51d77
}
