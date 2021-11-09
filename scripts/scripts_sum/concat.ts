import {
  concat,
  empty,
  filter,
  from,
  fromEvent,
  interval,
  map,
  of,
  reduce,
  scan,
  take,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  concatMap,
  delay,
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
 * concat subscribes to each observable in order,
 * subscribing to the next as the previous completes.
 * Like concatMap, you can think of concat based
 * operators as a single file line.
 */

const oneType$ = interval(1000).pipe(take(3));
const twoType$ = interval(3000).pipe(take(2));

concat(oneType$, twoType$).subscribe(console.log);
