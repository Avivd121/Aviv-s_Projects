function isPrime(num) {
  // check prime numbers
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimes(limit) {
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(237);
