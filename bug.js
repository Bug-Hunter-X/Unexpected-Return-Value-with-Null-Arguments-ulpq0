function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This line may cause unexpected behavior
  }
  return a + b;
}