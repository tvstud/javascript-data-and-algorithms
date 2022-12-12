function climbStairs(n) {
  // Base case: if n is 0 or 1, there is only one way to climb the stairs
  if (n <= 1) return 1;

  // Initialize an array to store the number of ways to climb the stairs
  let ways = [1, 1];

  // Iterate from 2 to n
  for (let i = 2; i <= n; i++) {
    // The number of ways to climb the stairs is equal to the sum of the
    // number of ways to climb the stairs for the previous two steps
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  // Return the number of ways to climb the stairs for the given value of n
  return ways[n];
}
