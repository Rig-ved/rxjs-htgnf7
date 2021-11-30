import { AsyncSubject, BehaviorSubject } from 'rxjs';

const sub = new AsyncSubject();

// ASync Subject works on the basis of completion and if complete is called emits the last Value to all the subscribers
const observer = {
  next: (val) => {
    console.log(val);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('completed');
  },
};

sub.next('Hello');
sub.next('World');
sub.next('Bye Nah');
sub.complete();
sub.next('GoodBye');

const sub1 = sub.subscribe(console.log);
const sub2 = sub.subscribe(observer);
