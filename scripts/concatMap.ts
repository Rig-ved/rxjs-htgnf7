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
import { ajax } from 'rxjs/ajax';
import {
  concatMap,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  mergeMap,
  pluck,
  skip,
  skipLast,
  skipWhile,
  switchMap,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';

const users$ = from([
  { name: 'Rick', age: '12' },
  { name: 'time', age: '1' },
  { name: 'Rick', age: '1' },
  { name: 'Tog', age: '169' },
  { name: 'Tog', age: '123' },
  { name: 'Holiz', age: '1' },
  { name: 'Vivek', age: '20' },
]);

/* 
/*
   * concat based operators are the 'single file line' 
   * of operators, maintaining 1 active inner observable at
   * a time. For instance, in this example on the first click a new
   * interval observable will be subscribed to internally,
   * with any emitted values being emitted by concatMap. 
   * If you click again while that inner interval
   * is active, the next interval will be queued until
   * the current active interval completes. At this point,
   * the next inner observable will be activated and so on...
   */
/* 
  concat map is first come first serve 
  order is important

*/
const click$ = fromEvent(document, 'click')
  .pipe(
    concatMap(() => {
      return interval(1000).pipe(take(3));
    })
  )
  .subscribe(console.log);
