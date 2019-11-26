export function iif(condition: boolean, ifTrue: () => void, ifFalse: () => void) {
  if (condition) {
    ifTrue();
  } else {
    ifFalse();
  }
}