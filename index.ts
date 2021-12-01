import { combineLatest, forkJoin, from, of, withLatestFrom, zip } from 'rxjs';

const color$ = of('blue', 'red', 'green', 'yellow', 'messa', 'magenta');

const logo$ = from(['fb', 'twitter', 'oauth', 'twillio', 'github', 'linkedIn']);

const withLatestFrom$ = logo$.pipe(withLatestFrom(color$));

// With latest from emits the source observable values in conjunction with the last value emitted from the inner observable . making changes in the inner Observable wont trigger the subscription

withLatestFrom$.subscribe(console.log);
