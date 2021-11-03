import { filter, from, fromEvent, map, of, reduce, scan } from 'rxjs';

from([1, 2, 3, 4, 5]).subscribe(console.log);

of([1, 2, 3, 4, 5]).subscribe(console.log);

// from([1, 2, 4, 5, 6, 7])
//   .pipe(
//     map((item) => item * 5),
//     filter((item) => item > 20),
//     reduce((acc, curr) => {
//       return acc + curr;
//     }, 0)
//   )
//   .subscribe(console.log);

from([1, 2, 4, 5, 6, 7])
  .pipe(
    map((item) => item * 5),
    filter((item) => item > 20),
    scan((acc, curr) => {
      return acc + curr;
    }, 0)
  )
  .subscribe(console.log);

const click$ = fromEvent(document, 'click');

// click$.
