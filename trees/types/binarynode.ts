// export type BinaryNode<T> = {
//   value: T
//   left: BinaryNode<T>
//   right: BinaryNode<T>
// }


export class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

