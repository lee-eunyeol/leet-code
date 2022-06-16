function fib(n: number): number {
  if (n < 2) return n

  let fib1 = 0; let fib2 = 1; let tmp = 0

  for (let i = 2; i <= n; i++) {
      tmp = fib1
      fib1 = fib2
      fib2 = tmp + fib1
  }

  return fib2
};