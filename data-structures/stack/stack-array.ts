class StackArray {
  private DEFAULT_CAPACITY: number = 10;
  private maxSize: number;
  private stackArray: number[];
  private top: number;

  constructor(size: number) {
    this.maxSize = size;
    this.stackArray = new Array(this.maxSize);
    this.top = -1;
    this.DEFAULT_CAPACITY;
  }
  /**
   * adiciona um item ao topo da pilha
   */
  push(value: number): void {
    if (!this.isFull()) {
      this.top++;
      this.stackArray[this.top] = value;
    } else {
      this.resize(this.maxSize * 2);
      this.push(value);
    }
  }
  /**
   * remove o ultimo item da stack
   */
  pop(): number {
    if (!this.isEmpty()) {
      return this.stackArray[this.top - 1];
    }

    if (this.top < this.maxSize / 4) {
      this.resize(this.maxSize / 2);
      return this.pop();
    } else {
      console.log("A stack ja esta vazia");
      return -1;
    }
  }

  /**
   * ponto mais alto da pilha, tambem conhecido como ultimo item adicionado a stack
   */
  peek(): number {
    if (!this.isEmpty()) {
      return this.stackArray[this.top];
    } else {
      console.log(
        "Stack esta vazia. Nao sera possivel retornar o elemento do pico da stack"
      );
      return -1;
    }
  }

  resize(newSize: number): void {
    let transferArray: number[] = new Array(newSize);
    for (let i: number = 0; i < this.stackArray.length; ++i) {
      transferArray[i] = this.stackArray[i];
    }

    this.stackArray = transferArray;
    this.maxSize = newSize;
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  isFull(): boolean {
    return this.top + 1 === this.maxSize;
  }

  /**
   * esse metodo nao deleta os elementos, mas se o metodo push() for chamado
   * apos makeEmpty(), os elementos da stack serao reescritos
   */
  makeEmpty(): void {
    this.top = -1;
  }

  size(): number {
    return this.top + 1;
  }
}

const main = () => {
  const stackArray = new StackArray(4);

  stackArray.push(5);
  stackArray.push(8);
  stackArray.push(2);
  stackArray.push(8);
  stackArray.push(9);

  console.log("A stack esta vazia? ", !stackArray.isEmpty());
  console.log("A stack esta cheia? ", stackArray.isFull());
  console.log(
    "O ponto mais alto da stack, é igual a 9? ",
    stackArray.peek() === 9
  );
  console.log(stackArray.pop() === 9);
  console.log(
    "O ponto mais alto da stack, é igual a 2? ",
    stackArray.peek() === 2
  );
  console.log(stackArray.size() === 3);
  console.log(stackArray);
};

main();
