import { delay, forkJoin, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const url = 'https://api.github.com';

/*
 * forkJoin waits for all inner observables to complete
 * before emitting the last emitted value of each.
 * The use cases for forkJoin are generally similar to
 * Promise.all

*/

// forkJoin({
//   user: ajax.getJSON(`${url}/users/reactivex`),
//   repos: ajax.getJSON(`${url}/users/reactivex/repos`),
// }).subscribe(console.log);

const obs$ = from([1, 2, 3, 4, 5]);
const obs1$ = from(['a', 'b', 'c', 'd', 'e']).pipe(delay(2000));
forkJoin({
  first: obs$,
  second: obs1$,
}).subscribe(console.log);
