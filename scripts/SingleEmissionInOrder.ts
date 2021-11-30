import { delay, from, interval, of, timer } from 'rxjs';
import {
  concatMap,
  concatMapTo,
  map,
  switchMapTo,
  take,
  tap,
} from 'rxjs/operators';
import './style.css';

const timer$ = from(['a', 'b', 'c', 'd', 'e', 'f', 'gh']);

timer$
  .pipe(
    concatMap((val) => {
      return of(val).pipe(
        delay(1000),
        map((val) => {
          return `Getting :  ${val}`;
        })
      );
    })
  )
  .subscribe(console.log);
