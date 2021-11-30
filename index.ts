const clicks = fromEvent(document, 'click');
const result = clicks.pipe(concatMapTo(interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));
