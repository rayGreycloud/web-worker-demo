// Check for worker
if (window.Worker) {
  let myWorker = new Worker('./js/worker.js');

  myWorker.postMessage('Hello from the main thread.');
}
