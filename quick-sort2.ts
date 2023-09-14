function quickSort2(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

const unsortedArray_: number[] = [
  100, 4, 1, 5, 9, 0, 3, 34, 56, -4, 2, 201, 404, 99, 67, 26, 18,
];
const sortedArray_: number[] = quickSort2(unsortedArray_);
console.log(sortedArray_);
