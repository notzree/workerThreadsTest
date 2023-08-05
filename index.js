const express = require('express');
const {Worker} = require('worker_threads');
const app = express();
const port = 3000;

var counter = 0;


app.get('/', (req, res) => {
    counter++;
    res.status(200).json({"message": counter})
})

app.get('/heavy', (req,res) =>{
    const worker = new Worker('./worker.js',{
        workerData: {
            counter
        }
    });
    worker.once('message', (data) => {
        counter = data;
        res.status(200).json({counter})
    })
   
})


app.listen(port, () => {
    console.log("Server started on port 3000")
})