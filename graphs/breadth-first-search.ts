declare type BinaryNode <T> = {
  value: T
  left: BinaryNode<T> | null
  right: BinaryNode<T> | null
}

function bfs(head: BinaryNode<number>, needle: number): boolean {
  // criando uma fila inves de um array list
  const q: (BinaryNode<number> | null)[] = [head]

  // enquanto tiver algum item na file
  while (q.length) {
    // posicao atual
    // current vai receber um novo array, porem com sem a head antiga, ou seja, shift, remove o primeiro item da fila
    // exemplo:
    //    arr = [1, 2, 3, 4, 5]
    //    arr.shift()
    //    newArray = arr // [2, 3, 4, 5]
    //
    //
    // aqui tambem esta sendo feita uma validacao, indicando que o array em alguma momento vai ser null ou undefined
     const curr = q.shift() as BinaryNode<number> | undefined | null
    if(!curr) {
      continue
    }
    // se o valor for igual ao valor necessario, entao retorna true
    if(curr.value === needle) {
      return true
    }
    q.push(curr.left)
    q.push(curr.right)
  }

  return false
}


const tree: BinaryNode<number> = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
}

const result = bfs(tree, 5);
console.log(result); // Output: true
