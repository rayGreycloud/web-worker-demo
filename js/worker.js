// Worker thread
// onmessage is built-in event handler
// Receive data from main thread
onmessage = e => {
  console.log(e.data);

  // Do work on data

  // Send data back to main thread
  postMessage('Greetings from the worker thread.');
};
