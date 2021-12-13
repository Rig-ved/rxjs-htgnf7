import { of, partition } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const names$ = of('Hello', 'World', 'Bye', 'Goodbye', 'Bye Night');

const filteredNames$ = names$.pipe(
  map((item) => {
    return {
      filtered: item.toLowerCase().indexOf('bye') != -1,
      others: item.toLowerCase().indexOf('bye') == -1,
    };
  })
);

filteredNames$.subscribe(console.log);
