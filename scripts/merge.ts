import { concat, from, fromEvent, interval, merge, of, timer } from 'rxjs';
import {
  delay,
  map,
  mapTo,
  pluck,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const second$ = fromEvent(start, 'click').pipe(mapTo('start'));
// const start$ = fromEvent(start, 'click');
const obs$ = fromEvent(stop, 'click').pipe(mapTo('stop'));
// merge(obs$.pipe(take(2)), second$.pipe(take(3))).subscribe(console.log);

merge(obs$, second$)
  .pipe(
    switchMap((item) => {
      if (item === 'start') {
        return from([12, 3, 4, 5]);
      } else {
        return of('a', 'b', 'c');
      }
    })
  )
  .subscribe(console.log);
