import { concat, fromEvent, interval, merge, of, timer } from 'rxjs';
import { delay, pluck, switchMap, take, takeUntil } from 'rxjs/operators';

const obs$ = of(1, 2, 3, 4, 5).pipe(delay(3000));
const second$ = of('Hello', 'a', 'ass', 'Hyej', 'd', 'as', 'asa').pipe(
  delay(2000)
);

// merge(obs$.pipe(take(2)), second$.pipe(take(3))).subscribe(console.log);

concat(obs$.pipe(take(2)), second$.pipe(take(3))).subscribe(console.log);

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

// const start$ = fromEvent(start, 'click');
const obs2$ = fromEvent(stop, 'click').pipe(
  pluck('currentTarget', 'innerText')
);
const second2$ = fromEvent(start, 'click').pipe(
  pluck('currentTarget', 'innerText')
);
// merge(obs$.pipe(take(2)), second$.pipe(take(3))).subscribe(console.log);

merge(obs2$, second2$).subscribe(console.log);
