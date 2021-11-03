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
import { takeLast, takeUntil, takeWhile } from 'rxjs/operators';

const users$ = [
  { name: 'Rick', age: '12' },
  { name: 'time', age: '1' },
  { name: 'Rick', age: '134' },
  { name: 'Tog', age: '169' },
  { name: 'Tog', age: '123' },
  { name: 'Holiz', age: '1' },
  { name: 'Vivek', age: '20' },
];
const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');
// from(users$).pipe(
//     take(3)
// ).subscribe(console.log);

/**
 * Take Until takes an observable
 */

//from(interval$).pipe(takeUntil(click$)).subscribe(console.log);

// from(users$)
//   .pipe(
//     takeWhile((item) => {
//       return item.name === 'Rick';
//     })
//   )
//   .subscribe(console.log);
