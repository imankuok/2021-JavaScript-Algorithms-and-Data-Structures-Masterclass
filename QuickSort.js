//have the pivot, let say the first one index from 0;

//them compare it to the second number, if it is larger, then continue to loop, else mark the number++; 

(IMAN)::
/**
 * @param {number[]} nums
 * @return {number}
 */
function pivot(arr, start=0, end =arr.length-1) {
    let swapidx = start;
    let pivot = nums[start];
    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
    
    for(let i=start+1; i< nums.length; i++ ){
        if(nums[i]< pivot){
            swapidx++;
          swap(nums, swpidx, i);
            
        }
    }
    swap(nums, swpidx, start);
    return swapidx;
};

function quicksort(arr, left=0, right=arr.length-1) {
  if(left<right){
  let pivotidx = pivot(arr, left, right)
  quicksort(arr, left, pivotidx-1);
  quicksort(arr, pivotidx+1, right);
  }
  
  return arr;
}

           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

  
colts:::
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

