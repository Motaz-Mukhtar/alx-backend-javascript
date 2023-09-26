export default function handleResponseFromAPI(promise) {
  const data = {
    status: 200,
    body: 'sucess',
  };

  return promise.then(() => data)
  .catch(err => new Error())
  .finally(() => {
    console.log('Got a response from the API');
  });
}