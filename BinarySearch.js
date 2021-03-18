function binarySearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length-1;
  let mid = Math.floor((left+right)/2);
  
  while(arr[mid] !== num && left <=right){
      if(num > arr[mid]) {left = mid+1;
  } else {right = mid-1; } 
  mid = Math.floor((left+right)/2);
  }
  
  
  if(arr[mid] === num) return mid;
  else{ return -1};
  
  
  
}
