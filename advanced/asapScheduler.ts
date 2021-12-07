import { asapScheduler, asyncScheduler, range } from 'rxjs';

const observer = {
  next: (val) => console.log('hello : ', val),
  error: (err) => console.log('Error ', err),
  complete: () => {
    console.log('Completed ');
  },
};

// Asap Schedulers are like queueMicrotask  which will immediately invoke after all the synchronous operations have finished but before waiting for the queue to throw other async tasks

// to prove this lets understand the functionality of the new programming of tasks which doesnt wait

const obs$ = range(1, 100).subscribe((data) => {
  console.log(data);
});

queueMicrotask(() => {
  console.log('From microtask');
});

Promise.resolve('Promise function').then(console.log);
// Here you can see async scheduler gets called at last

setTimeout(() => {
  console.log('Inside Timeout');
}, 0);

asyncScheduler.schedule(() => {
  console.log('From Async Scheduler');
});

// Asap Scheduler are more like promise.resolve and queueMicrotask
// ASAP Scheduler will block the UI
asapScheduler.schedule(() => {
  console.log('From Asap Scheduler');
});
console.log('Done GoodBye Sync tasks ');
