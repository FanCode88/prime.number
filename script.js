function isPrime(num) {
  //check if value is a natural numbers (integer)
  //without this check, it returns true
  if (isNaN(num) || num % 1 !== 0) {
    return false;
  }
  num = Math.abs(num); //*negative values can be primes
  if (num === 0 || num === 1) {
    return false;
  }
  var maxFactorNum = Math.sqrt(num);
  for (var i = 2; i <= maxFactorNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

(document.getElementById("demo").innerHTML = "All prime numbers from 1 - 1000"),
  "arr.join`, `";

var arr = [];
for (var i = 1; i < 1000; i++) if (isPrime(i)) arr.push(i);

console.log(arr.join`, `);
