import { interval, of, take } from 'rxjs';
import { takeLast, takeUntil, takeWhile } from 'rxjs/operators';

const sub = of(
  'Fred',
  'Hello',
  'Rick',
  'Worl',
  'a',
  'rgdhs',
  'hgth',
  'Scott'
).pipe(takeLast(1));

sub.subscribe(console.log);
