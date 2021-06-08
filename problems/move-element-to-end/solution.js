function moveToEnd(arr, toMove) {
  let right = arr.length - 1;
  let left = 0;

  while (left < right) {
   while(left < right && arr[right] === toMove) {
     right--;
   }

   if (arr[left] === toMove) {
     let temp = arr[right]; 
     arr[right] = arr[left];
     arr[left] = temp;
   }

   left++;
  }

  return arr;
}

console.log(moveToEnd([2,1,2,2,2,3,4,2], 2));