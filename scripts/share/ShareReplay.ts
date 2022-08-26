import { interval, shareReplay, timer } from 'rxjs';
import { tap, mapTo, share, take } from 'rxjs/operators';

//emit value in 1s
const source = interval(1000).pipe(take(2));
const example = source.pipe(tap(() => console.log('***SIDE EFFECT***')));

// const subscribe = example.subscribe((val) => console.log("Unshared 1",val));
// const subscribeTwo = example.subscribe((val) => console.log("Unshared 2" ,val));

//share observable among subscribers
// const sharedExample = example.pipe(share());

// const subscribeThree = sharedExample.subscribe((val) =>
//   console.log('Shared 1', val)
// );
// const subscribeFour = sharedExample.subscribe((val) =>
//   console.log('Shared 2', val)
// );

const sharedReplayExample = example.pipe(share());

const subscibeFive = sharedReplayExample.subscribe((val) =>
  console.log('Shared Replay 1', val)
);
const subscribeSix = sharedReplayExample.subscribe((val) =>
  console.log('Shared Replay 2', val)
);

setTimeout(() => {
  const seven = sharedReplayExample.subscribe(console.log);
}, 3000);
