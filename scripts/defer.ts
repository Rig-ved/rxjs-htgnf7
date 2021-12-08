import { defer, from } from 'rxjs';

const fetchVal = fetch('https://jsonplaceholder.typicode.com/todos/').then(
  (response) => response.json()
);

const fetch$ = defer(() => from(fetchVal));

fetch$.subscribe((data) => console.log(data));
