function insertionSort(unsortedList) {
  var len = unsortedList.length;
  
  for(var i = 0; i < len; i++) {
    var tmp = unsortedList[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
      //Shift the number
      unsortedList[j+1] = unsortedList[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsortedList[j+1] = tmp;
  }
}
// var ul = [5, 3, 1, 2, 4];
// insertionSort(ul);
// console.log(ul);


function test(arr) {
  console.log('for :', arr);
  insertionSort(arr);
  console.log('result :', arr);

}

test([5, 3, 1, 2, 4]); //result [1, 2, 3, 4, 5]
test([5, 3, 1, 2, 4, 9, 0]); //result [0, 1, 2, 3, 4, 5, 9]
test([1, 1, 1, 1, 0, 0, 0]); //result [0, 0, 0, 1, 1, 1, 1]