import { asyncScheduler, observeOn, of, subscribeOn, tap } from 'rxjs';

const observer = {
  next: (val) => {
    console.log('hello : ', val);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('hello');
  },
};

// Work function , delay , state
const sub = asyncScheduler.schedule(
  (data) => {
    console.log(data);
  },
  1000,
  {
    name: 'Rick',
    age: 10,
  }
);

const obs$ = of(4, 5, 6, 7);
// Immediate Execution of the code in synchronous manner
obs$.subscribe(console.log);

// Execution of the code in an asynchronous manner
// const sub$ = of(1, 2, 3, 4, asyncScheduler);
// sub$.subscribe(console.log);

// Introduce to a scheduler based on Observe on operator
const obsOn$ = of('pink', 'red', 'blue', 'White').pipe(
  // Instead of below use the delay operator as ObserveOn will fire late for Errors as well but delay will immediately invoke the same

  // Lets tap the results now : As you can see the results from tap are immediately invoked
  tap((val) => console.log('Val')),
  observeOn(asyncScheduler, 2000)

  // lastly instead of Observe on we can also do subscribeOn  which is equivalent to putting subscription within a setTimeout

  // subscribeOn(asyncScheduler, 3000)
);
obsOn$.subscribe(console.log);
console.log('Sync');
