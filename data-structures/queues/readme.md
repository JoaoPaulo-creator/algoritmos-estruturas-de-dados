Uma fila eh um algoritmo que esta logo acima de uma estrutura de dados, servindo justamente para manipula-las

Usando de exemplo uma lista ligada:
A -> B -> C -> D -> E
|-------------------|
head ------------- tail

Por se tratar de uma fila, quando for adicinado um novo node nessa lista, ele ficara na ultima posicao logo apois o node E (E -> F), e por ultimo a tail sera atualizada, recebendo o node F.

Pseudocodigo: <br />
<code>

this.tail.next = F; <br />
this.tail = F;
</code>

No caso de remover um item, o primeiro a sair sera o node A, e todo o valor contido em seu node sera jogado fora. Entao a nova head o node B, e o link do node A com B sera quebrado.

Pseudocodigo: <br />
<code>
h = this.head; <br />
head = this.head.next; <br />
h.next = null;
</code>
