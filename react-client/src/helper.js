export function serverRequest(data, callback) {
  console.log('this is data', data);
  fetch('http://127.0.0.1:3000/search', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: data
    })
  })
  .then((responseText) => {
    console.log('responseText', responseText.status);
    callback(responseText.status);
  })
  .catch((error) => {
    console.log('this is error', error)
  });
}

export function returnDB(callback) {
  fetch('http://127.0.0.1:3000/return', {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
    console.log('responseData', responseData);
    callback(responseData);
  })
}