import { BehaviorSubject, Subject } from 'rxjs';

const loading$ = new BehaviorSubject(true);

interface loading {
  showLoading(): void;
  hideLoading(): void;
  loadingStatus$: any;
}
export const loadingService: loading = {
  showLoading: () => loading$.next(true),
  hideLoading: () => loading$.next(false),
  loadingStatus$: loading$.asObservable(),
};
