/**
 *
 * Um buffer circular, fila circular, buffer cíclico ou buffer de anel é uma estrutura de dados que usa um único buffer de tamanho fixo como se estivesse conectado de ponta a ponta. Essa estrutura se presta facilmente ao buffer de fluxos de dados.
 * @see https://pt.wikipedia.org/wiki/Circular_buffer
 *
 *
 *
 * Uma consequência do circular queue, é que quando está cheio, os elementos mais antifos serão sobreescritos.
 *
 * Caso não seja desejável a sobreescrita dos dados mais antigos, deverá ser feito um tratamento e talvez lançar uma execeção
 */

class CircularQueue {
  arr: number[] | null;
  topOfQueue: number;
  begnningOfQueue: number;
  size: number;

  constructor(size: number) {
    this.arr = new Array(size);
    this.topOfQueue = -1;
    this.begnningOfQueue = -1;
    this.size = size;
  }

  isEmpty(): boolean {
    return this.begnningOfQueue === -1;
  }

  isFull(): boolean {
    if (this.topOfQueue + 1 === this.begnningOfQueue) {
      return true;
    } else {
      return this.topOfQueue === this.size - 1 && this.begnningOfQueue === 0;
    }
  }

  enQueue(value: number): void {
    if (this.isFull()) {
      console.log("A fila esta cheia/lotada");
    } else if (this.isEmpty()) {
      this.begnningOfQueue = 0;
      this.topOfQueue++;
      this.arr![this.topOfQueue] = value;
      console.log(value, " foi inserido a fila com sucesso");
    } else {
      if (this.topOfQueue + 1 === this.size) {
        this.topOfQueue = 0;
      } else {
        this.topOfQueue++;
      }
      this.arr![this.topOfQueue] = value;
      console.log(value, " foi inserido a fila com sucesso");
    }
  }

  deQueue(): number {
    if (this.isEmpty()) {
      console.log("A fila esta vazia");
      return -1;
    } else {
      let res: number = this.arr![this.begnningOfQueue];
      this.arr![this.begnningOfQueue] = Number.MIN_VALUE;

      if (this.begnningOfQueue === this.topOfQueue) {
        this.begnningOfQueue = this.topOfQueue - 1;
      } else if (this.begnningOfQueue + 1 === this.size) {
        this.begnningOfQueue = 0;
      } else {
        this.begnningOfQueue++;
      }

      return res;
    }
  }

  peek(): number {
    if (this.isEmpty()) {
      console.log("A fila esta vazia");
      return -1;
    } else {
      return this.arr![this.begnningOfQueue];
    }
  }

  deleteQueue(): void {
    this.arr = null;
    console.log("a fila foi deletada");
  }
}

function main() {
  const circularQueue = new CircularQueue(5);
  console.log(circularQueue.isEmpty());
  console.log(circularQueue.isFull());

  circularQueue.enQueue(1);
  circularQueue.enQueue(2);
  circularQueue.enQueue(3);
  circularQueue.enQueue(4);
  circularQueue.enQueue(5);

  console.log(circularQueue.deQueue());
  console.log(circularQueue.deQueue());
  console.log(circularQueue.deQueue());
  console.log(circularQueue.deQueue());
  console.log(circularQueue.deQueue());

  console.log(circularQueue.isFull());
  console.log(circularQueue.isEmpty());

  circularQueue.enQueue(6);
  circularQueue.enQueue(7);
  circularQueue.enQueue(8);

  console.log(circularQueue.peek());
  console.log(circularQueue.peek());
  circularQueue.deleteQueue();
}

main();
