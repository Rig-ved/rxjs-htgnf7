import { BehaviorSubject } from 'rxjs';

const sub = new BehaviorSubject(false);
sub.next(true);
sub.next(true);
sub.next(false);

sub.subscribe(console.log);
sub.next(true);
sub.next(true);
sub.next(true);
