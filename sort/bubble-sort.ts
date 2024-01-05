/*
 *
 *
 * A ideia do bubble sort, eh iterar um array, e comparar
 * a grandeza do 0 com o indice 0 + 1, 1 com 1 + 1, e assim por diante.
 * Dado que o valor do indice 3 eh maior que o valor do indice 4
 * entao eh feito o swap, ou seja, agora o indice 3 tem o antigo valor do indice 4
 * e o 4 o antigo valor do indice 3. E assim sucessivamente.
 *
 * Logo na primeira iteracao, o valor mais alto do array, sera posicionado no ultimo indice
 * */

function bubbleSort(arr: number[]) {

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 - i; ++j) {
      // fazendo o swap
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
}


const unsortedArray = [2,5,8,1,90,456,4,3,-1]
bubbleSort(unsortedArray)
console.log(unsortedArray)


