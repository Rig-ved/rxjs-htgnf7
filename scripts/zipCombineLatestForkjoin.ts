import { combineLatest, forkJoin, from, of, zip } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const color$ = of('blue', 'red', 'green', 'yellow', 'messa', 'magenta');

const logo$ = from(['fb', 'twitter', 'oauth', 'twillio', 'github', 'linkedIn']);

// Zip flocks as lovebirds : every new value gets mapped to the new value
combineLatest([color$, logo$]).subscribe(console.log);
zip(logo$, color$).subscribe(console.log);
forkJoin([logo$, color$]).subscribe(console.log);
logo$.pipe(withLatestFrom(color$)).subscribe(console.log);
