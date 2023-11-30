/**
 * Quicksort eh um algoritmo de ordenacao que utiliza a estrategia de dividir para conquistar.
 *
 * Pivot: elemento que sera utilizado para comparacao com os demais elementos do array.
 * Todo elemento que seja menor ou igual que ao pivot sera colocado a esquerda do pivot, nas primeiras posicoes do array.
 *
 * Como resquicio da busca binaria, o ultimo item do array sera chamado de high e o primeiro de low. Porem diferente
 * da busca binaria, ambos serao inclusivos.
 *
 * Uma vez que o pivot eh definido, tudo que esta ao lado esquerdo eh menor ou igual e tudo que esta ao lado direito eh maior ou igual.
 * Sendo assim, ao lado esquerdo, pequenos arrays serao criados, e mesmo que multiplos subarrays sejam criados, ainda assim todos eles serao menor ou igual ao pivot.
 *
 * Quicksort nem sempre eh quick
 *
 * Implementacao do quicksort, duas functions serao criadas, a function partition e a function quicksort.
 * Partition vai criar o index do pivot (ou atribuir o index do pivot), e movera os itens que serao menor que o pivot para a esquerda e os maiores para a direita.
 *
 * Quicksort vai chamar a function partition, e vai chamar a si mesma recursivamente para ordenar os subarrays.
 *
 * @see weak orderings: https://en.wikipedia.org/wiki/Weak_ordering
 *
 */

function partition(array: number[], low: number, high: number) {
  // pivot recebe o ultimo elemento do array
  const pivot = array[high];
  /*
  com index sendo o low - 1, sera possivel alocar os elementos a esquerda do pivot, pois eh como se o valor do idx estivesse "fora do array", e uma incrementado, seu index deixara de ser -1 e passara a ser 0, que eh o primeiro elemento do array. Uma vez que index agora faz parte do array,
  ele recebe o valor atual do index 0... (explicacao continua no incremento dentro do loop)
  */
  let idx = low - 1; // igual a -1 (pelo menos nesse exemplo)

  for (let i = low; i < high; i++) {
    // aqui se inicia o processo chamado de weak sorting

    // checando se o index eh menor que o pivot
    // e entao alocando cada elementos nos indices da esquerda do array
    if (array[i] < pivot) {
      /*
      Supondo que agora o indice de idx seja 0, ou seja, esteja na primeira posicao do array, o numero (ou qualquer valor) posicionado no index 0 sera trocado com o valor que eh menor ou igual ao pivot. Exemplo:
      Dado o array [8,7,6,4,5]
      idx = array[0] // idx = 8
      index3 = array[3] // index3 = 4

      O swap vai acontecer, e agora o array ficara assim:
      [4,7,6,8,5]
      onde idx = array[0] que tem valor 4
      */

      idx++; // movendo o index para a primeira posica co array

      const tmp = array[i]; // tmp recebe o valor do elemento atual temporariamente, antes de ser sobreescrito
      // fazendo o swap
      array[i] = array[idx];
      array[idx] = tmp;
    }
    // essa operacao eh finita, logo nao haverao mais valores menores ou iguais ao pivot... (explicacao continua fora do loop)
  }

  /*
  agora os elementos restantes sao maiores ou iguais ao pivot, e estao sendo movidos a direita deste pivot

  Se nada no array for menor ou igual ao pivot, a variavel idx sera incrementada para ficar com o valor da posicao do indice 0, ou low nesse caso
  */
  idx++;
  array[high] = array[idx];
  array[idx] = pivot;
  return idx;
}

function qs(array: number[], low: number, high: number) {
  if (low >= high) {
    return;
  }
  const pivotIdx = partition(array, low, high);
  qs(array, low, pivotIdx - 1);
  qs(array, pivotIdx + 1, high);
}

function quickSort(array: number[]) {
  qs(array, 0, array.length - 1);
  return array;
}

const unsortedArray: any = [
  100, 4, 1, 5, 9, 0, 3, 34, 56, -4, 2, 201, 404, 99, 67, 26, 18,
];
const sortedArray: number[] = quickSort(unsortedArray);
console.log(sortedArray);
