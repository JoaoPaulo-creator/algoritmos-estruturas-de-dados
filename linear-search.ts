// a busca linear itera um vetor e retorna o index do target informado
// o tempo da busca aumenta proporcionalmente ao numero de itens dentro do vetor.

function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const numberArray: number[] = [1, 6, 5, 6, 7, 8, 3, 45];
const result = linearSearch(numberArray, 3);

result === -1
  ? console.log("target`s index not found in the array")
  : console.log("Index of the target: ", result);
