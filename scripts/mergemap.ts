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
  distinctUntilChanged,
  distinctUntilKeyChanged,
  mergeMap,
  pluck,
  skip,
  skipLast,
  skipWhile,
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
Merge map is used if we want to control the inner observables 
Also merge map is used in cases when we dont want the operation 
to be cancelled as such like POST
 */
const click$ = fromEvent(document, 'click')
  .pipe(
    map((event: any) => {
      return {
        x: event.clientX,
        y: event.clientY,
      };
    }),
    mergeMap(() => {
      return interval(1000);
    })
  )
  .subscribe(console.log);
