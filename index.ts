import { interval, take, timer } from 'rxjs';

const source = interval(1000).pipe(take(10));

const timer1 = timer(2000).pipe(take(10));

timer1.subscribe(console.log);
