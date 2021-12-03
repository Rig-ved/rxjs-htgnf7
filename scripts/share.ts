import { interval, map, share, shareReplay, take } from 'rxjs';
import { publishReplay, tap } from 'rxjs/operators';

// share will multicast the value and turn the observable into HOT , With each subscription getting the values immediately
const source = interval(1000).pipe(
  take(3),
  tap(() => {
    console.log('Hello');
  }),
  map((x: number) => {
    console.log('Processing: ', x);
    return x * x;
  }),
  share()
);

source.subscribe((x) => console.log('subscription 1: ', x));
source.subscribe((x) => console.log('subscription 3: ', x));

setTimeout(() => {
  source.subscribe((x) => console.log('subscription 2: ', x));
}, 3000);
