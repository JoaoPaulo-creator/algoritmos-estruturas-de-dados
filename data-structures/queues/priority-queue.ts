/**
 * @description
 *Em ciência da computação, uma fila de prioridade é um tipo de dados abstrato semelhante a uma fila regular ou estrutura de dados de pilha. Cada elemento em uma fila de prioridade tem uma prioridade associada.
 * @see https://www.geeksforgeeks.org/priority-queue-set-1-introduction/
 */

class Item {
  value: number;
  priority: number;
  constructor() {}
}

class CFG {
  pr: Item[] = new Array<Item>(10000);
  size: number = -1;

  enqueue(value: number, priority: number): void {
    this.size++;

    this.pr[this.size] = new Item();
    this.pr[this.size].value = value;
    this.pr[this.size].priority = priority;
  }

  peek(): number {
    let highestPriority = Number.MIN_VALUE;
    let ind: number = -1;

    for (let i = 0; i <= this.size; ++i) {
      if (
        highestPriority == this.pr[i].priority &&
        ind > -1 &&
        this.pr[ind].value < this.pr[i].value
      ) {
        highestPriority = this.pr[i].priority;
        ind = i;
      } else if (highestPriority < this.pr[i].priority) {
        highestPriority = this.pr[i].priority;
        ind = i;
      }
    }
    return ind;
  }

  dequeue() {
    let ind: number = this.peek();
    for (let i = ind; i < this.size; ++i) {
      this.pr[i] = this.pr[i + 1];
    }
    this.size--;
  }
}

function main() {
  const t = new CFG();
  t.enqueue(10, 2);
  t.enqueue(14, 4);
  t.enqueue(16, 4);
  t.enqueue(12, 3);

  let ind = t.peek();

  console.log(t.pr[ind].value);

  t.dequeue();
  ind = t.peek();
  console.log(t.pr[ind].value);

  t.dequeue();
  ind = t.peek();
  console.log(t.pr[ind].value);
}

main();
