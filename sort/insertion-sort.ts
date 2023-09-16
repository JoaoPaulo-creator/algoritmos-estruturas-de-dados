/**
@see https://www.geeksforgeeks.org/insertion-sort/
 Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
 The array is virtually split into a sorted and an unsorted part.
 Values from the unsorted part are picked and placed at the correct position in the sorted part.
 */

function insectionSort(arr: number[]) {
  let i: number;
  let j: number;
  let key: number;

  for (i = 1; i < arr.length; ++i) {
    key = arr[i];
    j = i - 1;

    /**
     * Movendo elementos do array[0..i-1]
     * que sao maiores que a key, para uma posicao a frente
     * de sua atual posicao
     */

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

const unsoterdArray: number[] = [12, 11, 13, 5, 6, 1, -2, -566, 3, 8, 2];
const sortedArray = insectionSort(unsoterdArray);
console.log(sortedArray);
