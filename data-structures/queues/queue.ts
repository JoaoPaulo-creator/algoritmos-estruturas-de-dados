type QNode<T> = {
  value: T;
  next?: QNode<T> | null;
};

/**
 * Represents a queue data structure.
 * @template T The type of elements stored in the queue.
 */
class Queue<T> {
  public length: number;
  private head?: QNode<T> | null;
  private tail?: QNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  /**
   * Adds an item to the end of the queue.
   * @param item The item to be added to the queue.
   */
  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;
    // aumentando o tamanho da fila
    this.length++;
    // checando se a fila possui tail
    if (!this.tail) {
      // criando um novo nó
      this.tail = this.head = node;
      return;
    }

    // criando um tratamento para evitar de destuir os dados acidentalmente
    this.tail.next = node;
    // Entao pegamos o tail e apontamos para o novo nó, que esta no final da lista e sera o novo tail
    this.tail = node;
  }

  /**
   * Removes and returns the item at the front of the queue.
   * @returns The item at the front of the queue, or undefined if the queue is empty.
   */
  dequeue(): T | undefined {
    // checando se a fila possui head
    if (!this.head) return undefined;
    this.length--;
    /**
     * salvando o valor do head
     */
    const head = this.head;
    // atualizando o ponteiro do head para o proximo elemento
    this.head = this.head.next;

    head.next = undefined;

    // checando se a fila esta vazia
    if (!this.tail) {
      this.tail = undefined;
    }

    return head.value;
  }

  /**
   * Returns the item at the front of the queue without removing it.
   * @returns The item at the front of the queue, or undefined if the queue is empty.
   */
  peek(): T | undefined {
    return this.head?.value;
  }
}

function main() {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.peek()); // 1
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
  console.log(queue.dequeue()); // 3
  console.log(queue.dequeue()); // undefined
}
