const {workerData, parentPort} = require('worker_threads');

function heavy(data){

   for (let i = 0; i < 10000000000; i++){
       data ++;
   }
   return data
}
const result = heavy(workerData.counter)
parentPort.postMessage(result)

