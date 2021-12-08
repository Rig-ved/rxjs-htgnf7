import { interval, of, take } from 'rxjs';
import {
  last,
  share,
  shareReplay,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs/operators';

const sub = of(
  'Fred',
  'Hello',
  'Rick',
  'Worl',
  'a',
  'rgdhs',
  'hgth',
  'Scott'
).pipe(
  last(),
  tap(() => {
    console.log('Hey from tap');
  }),
  share()
);

sub.subscribe(console.log);
setTimeout(() => {
  sub.subscribe(console.log);
}, 3000);
