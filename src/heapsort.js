let heapSort = (arr) => {
    let len = arr.length
    let end = len-1;

    heapify(arr, len);
  
    while(end > 0){
        swap(arr, end--, 0);
        siftDown(arr, 0, end);
    }
  return arr;
}

let heapify = (arr, len) => {
    let mid = Math.floor((len-2)/2);

    while(mid >= 0){
        siftDown(arr, mid--, len-1);    
   }
}

let siftDown = (arr, start, end) => {
    let root = start
    let child = root*2 + 1
    let toSwap = root

    while(child <= end){
       if(arr[toSwap] < arr[child]){
         swap(arr, toSwap, child);
       }
       if(child+1 <= end && arr[toSwap] < arr[child+1]){
         swap(arr, toSwap, child+1)
       }
       if(toSwap != root){
          swap(arr, root, toSwap);
          root = toSwap;
       }
       else{
          return; 
       }
       toSwap = root;
       child = root*2+1
   }
}

let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

module.exports = {heapSort}