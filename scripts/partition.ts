import { of, partition } from 'rxjs';

const names$ = of('Hello', 'World', 'Bye', 'Goodbye', 'Bye Night');

const [bye$, otherNames$] = partition(names$, (item, index) => {
  return item.toLowerCase().indexOf('bye') != -1;
});

bye$.subscribe(console.log);
otherNames$.subscribe(console.log);
