/**
 * A pesquisa ou busca binária é um algoritmo de busca em vetores que segue o paradigma de divisão e conquista.
 * Ela parte do pressuposto de que o vetor está ordenado e realiza sucessivas divisões do espaço de busca comparando o elemento buscado com o elemento no meio do vetor
 *
 *
 * */

export function binarySearchIterative(
  arr: number[],
  target: number
): number | null {
  let left = arr[0]; // recebe o primeiro elemento do array
  let right = arr.length - 1; // recebe o ultimo elemento do array

  // retorna -1 se o array estiver vazio ou se o target for menor que o primeiro elemento ou maior que o ultimo elemento
  if (arr.length === 0) return -1;
  if (target < arr[0] || target > arr[right]) return -1;

  while (left < right) {
    console.log("left: ", left);
    console.log("right: ", right);

    const mid = Math.floor((left + right) / 2); // o match floor vai arredondar para baixo, caso o resultado da divisao seja um numero quebrado
    console.log("mid: ", mid);
    if (arr[mid] === target) {
      return mid; // se encontrar o index do target, retorna seu index e a busca para
    } else if (arr[mid] < target) {
      left = mid + 1; // left agora tem o valor do indice a direita do mid, indicando que o target esta na metade da direita
    } else {
      right = mid - 1; // right agora tem o valor do indice a esquerda do mid, indicando que o target esta na metade da esquerda
    }
  }

  return null;
}

const sortedArray: any = []; //[-5, -4, -2, 0, 1, 2, 3, 5, 4, 6, 10, 7, 7, 7, 7, 8, 9, 11, 14, 16, 22, 23, 25, 26, 31, 32, 34, 46]
const target = 11;
const searchResult = binarySearchIterative(sortedArray, target);

if (searchResult) {
  console.log(`Elemento ${target} encontrado no array`);
} else {
  console.log(`Elemento ${target} não foi encontrado no array`);
}
