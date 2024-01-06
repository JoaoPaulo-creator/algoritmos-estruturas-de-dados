import { BinaryNode } from "./types/binarynode"

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if(!curr) {
    return path
  }
  // recurse
  // pre
  path.push(curr.value)

  // recurse
  // A recurasao vai caminhar por um dos lados da arvore...
  this.walk(curr.left, path)
  this.walk(curr.right, path)
  //... e quando um node vazio for encontrado, retorna o path
  // post
  return path
}

function  pre_order_search(head: BinaryNode<number>): number[] {
  return this.walk(head, [])
}
