import { fromEvent, interval, map } from 'rxjs';

// Unsubscribing

//Click observable
const fromClick$ = fromEvent(document, 'click').pipe(
  map((event: any) => {
    return event?.clientX;
  })
);

const interval$ = interval(1000);

const intervalSub = interval$.subscribe(console.log);

intervalSub.add(fromClick$.subscribe(console.log));

// const clickSub = fromClick$.subscribe(console.log);

// the manual approach
// setTimeout(() => {
//   // clickSub.unsubscribe();
//   // intervalSub.unsubscribe();
// }, 15000);

// the sub sink approach

setTimeout(() => {
  // clickSub.unsubscribe();
  intervalSub.unsubscribe();
}, 15000);
