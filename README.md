# workerThreadsTest
Small program to test the multithreaded capabilities of Node.js using an Express server
## How to run the program
run `npm i` to install the packages.
Then run `node index.js` to start the server

## Isnt javascript single threaded?
Yes, but using Node.js Worker_threads we are able to use threads and execute javascript in parallel.
Try it out for yourself!
We have 2 routes, / and /heavy. When you access the default route (/), it increements a counter by 1. 
When you access /heavy, it will incremement the counter by 1 10000000000 times, simulating a cpu intensive task that 
will block the main thread. 
Try accessing /heavy, then acessing the default route. Because we are using worker threads, you will see that the default route still fetches. 
This is because the computation for /heavy is running on a seperate thread and therefore not blocking the main thread. 
