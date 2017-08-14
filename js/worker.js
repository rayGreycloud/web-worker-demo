// Worker thread
// onmessage is built-in event handler
// Receive data from main thread
onmessage = e => {
  // Pull off data
  var { foo, bar, message } = e.data;
  // Display message
  console.log(message);

  // Do work on data
  var answer = foo + bar;
  var processedData = `${foo} + ${bar} = ${answer}`;

  // Send data back to main thread
  postMessage(processedData);
};
