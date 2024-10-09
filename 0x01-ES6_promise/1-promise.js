export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
<<<<<<< HEAD
      let obj = {'status': 200, 'body': 'Success'};
      resolve(obj);
=======
      resolve({
        status: 200,
        body: 'Success',
      });
>>>>>>> 2c31646cfdd81f58c54e9353665ab5cbb8a51d77
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
