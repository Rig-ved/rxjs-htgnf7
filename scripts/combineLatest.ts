import { combineLatest, fromEvent, pluck, tap } from 'rxjs';
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
} from 'rxjs/operators';
import './style.css';

const qty = document.querySelector('#qty');
const rate = document.querySelector('#rate');

const display = document.querySelector('#displayContent');

const qty$ = fromEvent(qty, 'input').pipe(pluck('target', 'value'));
const rate$ = fromEvent(rate, 'input').pipe(pluck('target', 'value'));

const calculate = (qty, rate) => {
  return +qty * +rate;
};

const combine$ = combineLatest([qty$, rate$]).pipe(
  map(([qty, rate]) => {
    return calculate(qty, rate);
  }),
  distinctUntilChanged(),

  filter((item: number) => {
    return !isNaN(item);
  }),
  map((item) => String(item))
);

combine$.subscribe((data) => {
  display.innerHTML = data;
});
