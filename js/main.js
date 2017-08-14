// Check for worker
if (window.Worker) {
  // Create worker
  var myWorker = new Worker('js/worker.js');

  // Send message to worker thread
  myWorker.postMessage('Hello from the main thread.');
  // Receive message from worker thread
  myWorker.onmessage = e => console.log(e.data);
}
