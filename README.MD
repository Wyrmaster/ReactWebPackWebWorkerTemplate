# Template for a React App

This template contains all configuration for Development or Production build of a React-App. 
It is compiled using Webpack and has the implementation for using WebWorkers.
It is compiled using webpack. 
It copies and generates files into a **Build** folder that contains a generated *Index.html* with a corresponding *main.[hash].js* and a corresponding *main.[hash].css*. 
These Hashes are generated based upon the content. 
Once this content changes the hash changes. 
This enables CacheBusting.

The *Index.html* in the **Source** folder is the template that is used to generate the *Index.html* in the **Build** folder.

## WebWorker Tutorial

To work with webworker two different files are needed.

Create a file/s with the following pattern

*\<FileName\>.Worker.ts*

Reference these in your *.tsx* or *ts* files.

Your Worker file should look something like this:

```typescript
// Define the worker class
const ctx: Worker = self as any;

// here you can set an event that implement the logic to be executed in the thread
ctx.addEventListener('message', async (e) => {
  // contains any data passed where the worker is consumed
  const data:any = e.data;
  // do some logic
  const response: any = "SomeData";
  // return data from the worker to signal that the worker has finished
  ctx.postMessage(response);
});
```

The created worker can be used like this:

```typescript
// create a new worker
const w = new Worker();
// the event that is triggered once the worker finished
w.onmessage = function(e) {
  // do something
  // terminate the worker for cleanup
  w.terminate();
};
// data
const data: any = "SomeData";
// start the worker
w.postMessage(data)
```



