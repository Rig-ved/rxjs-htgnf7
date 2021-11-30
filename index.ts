import './style.css';
import { loadingService as _ } from './loadingService';
import { fromEvent, interval } from 'rxjs';
import {
  exhaustMap,
  first,
  take,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs/operators';

const loadingOverlay = document.querySelector('#loading-overlay');

const interval$ = interval(5000).pipe(
  first(),
  tap(() => {
    return _.hideLoading();
  })
);
_.loadingStatus$.pipe(takeUntil(interval$)).subscribe((item) => {
  if (Boolean(item)) {
    loadingOverlay.classList.add('open');
  } else {
    loadingOverlay.classList.remove('open');
  }
});
