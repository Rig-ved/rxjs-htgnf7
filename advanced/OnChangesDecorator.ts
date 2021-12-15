export interface SimpleChange<T> {
  previousValue: T;
  currentValue: T;
}

export function onChanges<T = any>(
  callback: (value: T, simpleChange?: SimpleChange<T>) => void
) {
  let cached = Symbol();
  return (target, key) => {
    Object.defineProperty(target, key, {
      set(value) {
        if (this[cached] != value) {
          return;
        }
        this[cached] = value;
        const change: SimpleChange<T> = {
          currentValue: value,
          previousValue: this[cached],
        };
        callback.call(this, value, change);
      },
      get() {
        return this[cached];
      },
    });
  };
}
