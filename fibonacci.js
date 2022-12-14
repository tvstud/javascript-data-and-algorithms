function fib(n) {
  if (n <= 1) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 2; i <= n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));