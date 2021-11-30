import { interval, map, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const observer = {
  next: (val) => {
    console.log('Next Oberserver : ', val);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('Completed by the observer');
  },
};

const subject = new Subject();

const interval$ = interval(2000).pipe(
  tap((item) => {
    console.log(`Next Interval : ${item+1}`);
  })
);

interval$.subscribe(subject);

const sub1 =  subject.subscribe(observer)
const sub =  subject.subscribe(observer)

