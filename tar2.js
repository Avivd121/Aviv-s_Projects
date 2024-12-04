//Presenter : Aviv Dahan
function isPrime(num) {
  //Function to check prime numbers
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to print all prime numbers less than the given limit
function printPrimes(limit) {
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(237);
