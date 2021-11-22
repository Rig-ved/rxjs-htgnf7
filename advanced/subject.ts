// Subject is an observable
// Subjects are multicast

import {
  BehaviorSubject,
  from,
  interval,
  ReplaySubject,
  Subject,
  take,
  takeWhile,
  tap,
} from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

let sub = new Subject();

const observer = {
  next: (item) => {
    console.log('next from observer : ', item);
  },
  error: (error) => {
    console.log('Error from observer: ', error);
  },
  complete: () => {
    console.log('Complete From Observer : ');
  },
};

// let subscription = sub.subscribe(observer);
// sub.next('Hello');
// let subscription2 = sub.subscribe(observer);
// sub.next('World');

const interval$ = interval(2000).pipe(
  take(5),
  tap((item) => console.log('From Interval', item))
);

// interval$.subscribe(sub);
interval$.subscribe(observer);
