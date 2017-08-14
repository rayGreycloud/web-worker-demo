// Check for web worker support
if (window.Worker) {
  // Create worker
  var myWorker = new Worker('js/worker.js');

  // Data to send to worker thread
  var foo = 5;
  var bar = 3;
  var message = `What is the sum of ${foo} + ${bar}?`;
  var data = {
    foo,
    bar,
    message
  };

  // Send data to worker thread
  myWorker.postMessage(data);

  // Receive data from worker thread
  myWorker.onmessage = e => console.log(e.data);
}
