import {
  filter,
  from,
  fromEvent,
  interval,
  map,
  of,
  reduce,
  scan,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  concatMap,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  exhaustMap,
  mergeMap,
  pluck,
  skip,
  skipLast,
  skipWhile,
  switchMap,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';

const users$ = from([
  { name: 'Rick', age: '12' },
  { name: 'time', age: '1' },
  { name: 'Rick', age: '1' },
  { name: 'Tog', age: '169' },
  { name: 'Tog', age: '123' },
  { name: 'Holiz', age: '1' },
  { name: 'Vivek', age: '20' },
]);

/* 
/*
 exhaust Map only maintains one innner observable at a time 
/* 
 When the inner observable completes the next value from the source will trigger the inner observable again
 Exhaust Map will never be cancelled until the inner observable triggered is exhausted or completed
*/
const click$ = fromEvent(document, 'click')
  .pipe(
    exhaustMap(() => {
      return interval(1000).pipe(take(3));
    })
  )
  .subscribe(console.log);
