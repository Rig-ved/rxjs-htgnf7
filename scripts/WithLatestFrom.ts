import {
  combineLatest,
  fromEvent,
  interval,
  Observable,
  pluck,
  tap,
} from 'rxjs';
console.clear();
import {
  combineLatestWith,
  delay,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  share,
  switchMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';
import './style.css';

const qty: Element = document.querySelector('#qty');
const rate = document.querySelector('#rate');

const display = document.querySelector('#displayContent');

const qty$ = interval(3000).pipe(
  map((data) => data + 1),
  take(10)
);

qty$.subscribe((data) => {
  qty.setAttribute('value', String(data));
});
const rate$: Observable<number> = fromEvent(rate, 'input').pipe(
  pluck('target', 'value'),
  map((item) => +item)
);

const calculate = (qty, rate) => {
  if (qty == 0 || rate == 0) {
    return String(10);
  }

  return String(+qty * +rate);
};

const combine$ = rate$.pipe(
  withLatestFrom(qty$),
  map(([rate, qty]) => {
    return calculate(qty, rate);
  })
);

combine$.subscribe((data) => {
  display.innerHTML = data;
});
