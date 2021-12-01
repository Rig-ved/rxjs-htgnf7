import { combineLatest, forkJoin, from, of, zip } from 'rxjs';

const color$ = of('blue', 'red', 'green', 'yellow', 'messa', 'magenta');

const logo$ = from(['fb', 'twitter', 'oauth', 'twillio', 'github', 'linkedIn']);

// Zip flocks as lovebirds : every new value gets mapped to the new value
zip(color$, logo$).subscribe(console.log);
