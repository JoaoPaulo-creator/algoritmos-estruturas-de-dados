/*
O Merge Sort é um algoritmo de ordenação eficiente e de propósito geral que utiliza 
a técnica de divisão e conquista para classificar uma lista (ou matriz) de elementos.
*/

/*

explicacao gerada pelo codeium, pois estou com preguica de gerar doc
The merge function takes an array (arr) and three indices (left, m, and right) as parameters.
It divides the array into two halves, merges them in sorted order, and updates the original array.
*/
function merge(arr: number[], left: number, m: number, right: number) {
  let n1 = m - left + 1;
  let n2 = right - m;

  if (n1 <= 0 || n2 <= 0) {
    return;
  }

  let Left = new Array(n1);
  let Right = new Array(n2);

  for (let i = 0; i < n1; ++i) {
    Left[i] = arr[left + i];
  }

  for (let j = 0; j < n2; ++j) {
    Right[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;

  let k = left;

  while (i < n1 && j < n2) {
    if (Left[i] <= Right[j]) {
      arr[k] = Left[i];
      ++i;
    } else {
      arr[k] = Right[j];
      ++j;
    }
    ++k;
  }
  // Copy remaining elements of L[] if any
  while (i < n1) {
    arr[k] = Left[i];
    ++i;
    ++k;
  }

  while (j < n2) {
    arr[k] = Right[j];
    ++j;
    ++k;
  }
}

function mergeSort(arr: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }

  let m = left + Math.floor((right - left) / 2);

  // fazendo o sort da segunda metade
  mergeSort(arr, left, m);
  mergeSort(arr, m + 1, right);

  //mergeando as metades sorteadas
  merge(arr, left, m, right);
}

const array: number[] = [201, 309, -4, 12, 11, 13, 5, 6, 7, 100];

console.log("unsorted array: ", array);
const sortedArray = mergeSort(array, 0, array.length - 1);
console.log("sorted array: ", array);
