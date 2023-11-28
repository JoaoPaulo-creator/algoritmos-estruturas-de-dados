/**
 * stacks tambem trabalham em cima de uma lista ligada, onde os valores sao guardados em nodes e teoricamente nao possuem
 * indices. Porem, diferente de uma fila, onde o primeiro a entrar eh o primeiro a sair, em uma stack o primeiro a entrar eh o ultimo a sair
 * o caminho feito eh o inverso da fila.
 *
 * Exemplo de uma lista ligada no formato de fila:
 *  A -> B -> C -> D
 *  |              |
 * head          tail
 *
 * Exemplo de uma lista ligada no formato de pilha:
 *  A <- B <- C <- D
 *  |              |
 * tail          head
 *  Entao, caso queiramos adicionar um novo item a pilha, o novo item sera o head dessa lista ligada. Assim como remover, o head sera removido primeiro, e o tem abaixo se torna a nova hea
 * e assim por diante.
 *
 */

type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  /**
   * Adds an item to the top of the stack.
   * @param item The item to be added to the stack.
   * @returns void
   */
  push(item: T): void {
    const node = { value: item } as SNode<T>;

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    // o novo elemento esta apontando para o head atual. Ex.: E (que eh head) <- F (que eh o novo elemento)
    node.prev = this.head;
    // aqui entao o head eh atualizado para o novo elemento
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    // se o tamanho da lista for 0, logo nao existe mais head
    // entao head recebe undefined
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    /**
     *  caso ainda exista head, entao sera necessario desacoplar essa head da lista
     */
    const head = this.head; // aqui recebo o head atual
    this.head = head?.prev; // o desacoplamento acontece, e entao head recebe o valor anterior
    return head?.value; // agora o head (anterior, que agora eh o atual) eh retornado

    /**
     * E <- F (F eh o head atual)
     * F vai ser removido
     * eh feito o apontamento para o valor anterior, que nesse caso eh E
     * E por ultimo, E eh retornado e se torna o head atual
     * */
  }

  /**
   * Returns the value of the top element in the stack without removing it.
   * If the stack is empty, returns undefined.
   *
   * @returns The value of the top element in the stack, or undefined if the stack is empty.
   */
  peek(): T | undefined {
    // se tiver um valor, retorna head, senao undefined
    return this.head?.value;
  }
}

function runStack() {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log(stack);
  console.log(stack.peek());
  console.log("Primeiro node a ser removido da stack: ", stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack);
}

runStack();
