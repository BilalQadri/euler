
function prime_range(limit) {
  
  var odd_range = range(1, limit, 2).filter(v => (v % 2) === 1);
  var primes = [];
  for(;;) {
     
     var p = odd_range[0];
     primes.push(p);
     odd_range = odd_range.filter(v => (v % p !== 0));
    
     if ((p * p) > limit) return primes.concat(odd_range);
  }
}

