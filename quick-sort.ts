// este codigo foi copiado daqui: https://github.com/TheAlgorithms/TypeScript/blob/master/sorts/quick_sort.ts

function partition(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      //desestruturando os arrays
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) {
  let index: number;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (left < right) {
      quickSort(array, index, right);
    }
  }

  return array;
}

const unsortedArray: number[] = [
  100, 4, 1, 5, 9, 0, 3, 34, 56, -4, 2, 201, 404, 99, 67, 26, 18,
];
const sortedArray: number[] = quickSort(unsortedArray);
console.log(sortedArray);
