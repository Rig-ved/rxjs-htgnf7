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
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';

const users$ = [
  { name: 'Rick', age: '12' },
  { name: 'time', age: '1' },
  { name: 'Rick', age: '1' },
  { name: 'Tog', age: '169' },
  { name: 'Tog', age: '123' },
  { name: 'Holiz', age: '1' },
  { name: 'Vivek', age: '20' },
];

// from(users$).pipe(
//   distinctUntilKeyChanged('age')
// ).subscribe(console.log)

from(users$).pipe(pluck('name')).subscribe(console.log);
