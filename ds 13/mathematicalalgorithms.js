
// fibonnacci
// function fibonnacci(n)
// {
//           const fib = [0,1];
//           for(let i=2; i<n; i++)
//           {
//                     fib[i] = fib[i-1] + fib[i-2]
                   
//           }
//           return fib
// }

// console.log(fibonnacci(4))
// console.log(fibonnacci(7))
// console.log(fibonnacci(1))
// console.log(fibonnacci(2))
// console.log(fibonnacci(3))



// time complexity - O(n)

// factorial

// function factorial(n){
//           let result = 1 
//           for(let i=2; i<n; i++)
//           {
//              result = result * i
//           }
//           return result
// }
// console.log(factorial(0))
// console.log(factorial(2))
// console.log(factorial(7))
// console.log(factorial(2))
// console.log(factorial(6))

// time complexity - O(n)


// prime or not

// function prime(n)
// {
//           if(n < 2)
//           {
//                     return false
//           }
//           for(let i=2; i<n; i++)
//           {
//                     if(n%i === 0)
//                     {
//                               return false
//                     }
//           }
//           return true
// }

// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

// the time complexity of the above is O(n) but the same can also be written in other complexity which is : 

// function prime(n)
// {
//           if(n<2)
//           {
//                     return false
//           }
//           for(let i=2; i<= Math.sqrt(n); i++)
//           {
//                     if(n%i === 0)
//                     {
//                               return false
//                     }
//           }
//           return true
// }
// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

// time complexity - O(spqrt(n)

// function isPowerOfTwo(n)
// {
//           if(n<1)
//           {
//                     return false
//           }
          
//      while(n > 1)
//      {
//           if(n%2 !== 0)
//           {
//                     return false
//           }
//           n = n/2
//      }
//      return true
// }

// console.log(isPowerOfTwo(8))

// the time complexity is O(logn)

// alternative solution for the above

// function isPowerOfTwo(n)
// {
//           if(n<1)
//           {
//                     return false
//           }
//           return (n&(n-1)) === 0
// }

// console.log(isPowerOfTwo(6))
// for the above solution, the time complexity is constant. So this is the optimized solution!

// fibonacci

// function isFibonnacci(n)
// {
//           if(n<2)
//           {
//                     return n
//           }
//           return isFibonnacci(n-1) + isFibonnacci(n-2)

  
// }
// console.log(isFibonnacci(5))
// console.log(isFibonnacci(6))
// console.log(isFibonnacci(1))
// console.log(isFibonnacci(0))

// time complexity is O(2^n)

// recursive factorial

// function recursivefact(n)
// {
//           if(n===0)
//           {
//                     return 1
//           }
//           return n * recursivefact(n-1)
// }
// console.log(recursivefact(5))

// time complexity is linear

