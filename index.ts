import { ReplaySubject } from 'rxjs';

const sub = new ReplaySubject(2);

// Replay subject will replay all the values

sub.next(1);
sub.next(2);
sub.next(3);
sub.subscribe(console.log);
sub.next(4);
sub.next(5);
