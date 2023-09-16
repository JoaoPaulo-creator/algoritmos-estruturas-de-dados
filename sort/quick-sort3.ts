// esse codigo foi criado a partir dos exemplos em Java, C, C++, etc; a partir deste site: https://www.programiz.com/dsa/quick-sort

function swap(arr: number[], a: number, b: number): void {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

function printArray(array: number[], size: number): void {
  for (let i = 0; i < size; i++) {
    console.log(array[i] + " ");
  }
  console.log();
}

function partition(arr: number[], left: number, right: number): number {
  // o pivot recebe como atribuicao o elemento mais alto do array
  let pivot = arr[right];
  let i = left - 1;

  for (let j: number = left; j < right; ++j) {
    if (arr[j] <= pivot) {
      /**
       * se for encontrando um elemento menor que o elemento do pivot
       * troque-o com o maior elemento apontado pela variavel i
       */
      ++i;

      // trocando o elemento na posicao i com o elemento na posicao j
      swap(arr, i, j);
    }
  }
  // trocando o pivot com o maior elemento na posicao i
  swap(arr, i + 1, right);

  return i + 1;
}

function quickSort3(arr: number[], left: number, right: number) {
  if (left < right) {
    const pi = partition(arr, left, right);

    quickSort3(arr, left, pi - 1);
    quickSort3(arr, pi + 1, right);
  }
}

const data: number[] = [8, 7, 6, 1, 0, 9, 2];
const n: number = data.length;

console.log("Unsorted Array: ", data);

// Perform quicksort on data
quickSort3(data, 0, n - 1);
console.log("Sorted array in ascending order: ", data);
