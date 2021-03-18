function power(a,b){
   if(b === 0) return 1; 
   return a * power(a, b-1);
}

function factorial(num){
    if(num===0) return 1;
   if(num === 1) return 1; 
   return num * factorial(num-1);
}

function  productOfArray(arr){
    if(arr.length===0) return 1;
    let num =arr.shift();
   return  num * productOfArray(arr);
}

function recursiveRange(num){
    if(num ===0) return 0;
    return num + recursiveRange(num-1);
}

FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
