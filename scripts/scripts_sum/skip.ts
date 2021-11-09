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
import {
  distinctUntilChanged,
  distinctUntilKeyChanged,
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
skip will skip the existing immediateries
 */

// users$.pipe(
//   skip(3)
// ).subscribe(console.log)

// users$.pipe(
//   skipLast(3)
// ).subscribe(console.log)

users$.pipe(skipWhile((item) => item.name === 'Rick')).subscribe(console.log);
