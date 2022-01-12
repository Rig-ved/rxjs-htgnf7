import { BehaviorSubject, map, Observable, ReplaySubject, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

const sub = new ReplaySubject(2);
sub.next(1);
sub.next(2);
sub.next(3);
sub.subscribe(console.log);
sub.next(6);

const hello = Observable.create(function (observer) {
  observer.next('Hello');
  observer.next('World');
  observer.complete(() => alert(1));
});

hello.pipe(finalize(() => console.log('12121'))).subscribe(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('From Completed1');
  }
);
