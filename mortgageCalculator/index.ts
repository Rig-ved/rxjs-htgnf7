import './style.css';
console.clear();

// begin lesson code
import { combineLatest, forkJoin, fromEvent, of } from 'rxjs';
import {
  map,
  filter,
  delay,
  mergeMap,
  tap,
  share,
  concatMap,
  shareReplay,
  switchMap,
  mapTo,
} from 'rxjs/operators';
import { calculateMortgage } from './helpers';
import { ajax } from 'rxjs/ajax';

//id of the labels

const loanAmount = document.querySelector('#loanAmount');
const interest = document.querySelector('#interest');
const loanLength = document.querySelectorAll('.loanLength');
const expected = document.querySelector('#expected');

//helpers

const createInput = (elem) => {
  return fromEvent(elem, 'input').pipe(
    map((event: any) => parseFloat(event.target.value))
  );
};

// streams and observables
const interest$ = createInput(interest);
const loanAmount$ = createInput(loanAmount);
const loanLength$ = createInput(loanLength);

//suppose i want to make a save on the response
const saveResponse = (item) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  let data = item;
  return ajax.post(url, item).pipe(mapTo(data));
};

// Combine latest from Each stream
const calculator$ = combineLatest({
  interest: interest$,
  loanAmount: loanAmount$,
  length: loanLength$,
}).pipe(
  map(({ interest, loanAmount, length }) => {
    return calculateMortgage(interest, loanAmount, length);
  }),
  tap((item) => {
    console.log(item);
  }),
  filter((item) => !isNaN(parseFloat(item))),
  share()
);

calculator$.subscribe((value) => {
  if (value) expected.innerHTML = value;
});

calculator$
  .pipe(
    delay(2000),
    switchMap((item) => saveResponse(item))
  )
  .subscribe((item) => alert(`Monthly Payment saved as : $${item}`));
