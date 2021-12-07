import { finalize, interval, take } from 'rxjs';

const sub = interval(2000).pipe(
  take(4),
  finalize(() => {
    alert('Hi');
  })
);

sub.subscribe({
  next: (val) => {
    console.log(val);
  },
});
