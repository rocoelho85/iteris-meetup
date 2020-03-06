export function iif(condition: boolean, ifTrue: () => void, ifFalse: () => void, context?: any) {
  if (context) {
    if (condition) {
      ifTrue.call(context);
    } else {
      ifFalse.call(context);
    }
  } else {
    if (condition) {
      ifTrue();
    } else {
      ifFalse();
    }
  }
}
