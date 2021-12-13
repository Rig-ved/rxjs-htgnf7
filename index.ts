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
  'Val'
).pipe(
  last(),
  tap(() => {
    console.log('Hey from tap');
  }),
  shareReplay()
);

sub.subscribe(console.log);
setTimeout(() => {
  sub.subscribe(console.log);
}, 3000);
