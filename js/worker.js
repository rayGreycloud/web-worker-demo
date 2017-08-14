// Worker thread
// onmessage is built-in event handler
// Receive data from main thread
onmessage = function(e) {
  console.log(e.data);
  // Send data back to main thread
  postMessage('Greetings from the worker thread.');
};
