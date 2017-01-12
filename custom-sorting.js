// SORT NUMERICALLY

var array = [10, 2, 5, 1, 9];


function sortFunction (a, b) {
  return (a - b);
}

array.sort(sortFunction);
console.log(array);


// CUSTOM COMPARATOR