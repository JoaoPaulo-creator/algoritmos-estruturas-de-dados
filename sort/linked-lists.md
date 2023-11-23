Listas ligadas sao uma estrutura de dados linear, conhecida como estrutura de dados baseada em nodes/nos.
O node neste caso, seria o node como container de dados

O primeiro elemento da lista ligada eh o head, e o ultimo eh o tail.

Listas ligadas contem nodes, que detem valores, e esse node faz referencia ao proximo node da lista, e entao caminhamos pela lista via esses nodes.

Uma lista ligada singular (single linked list) tem apenas uma referencia para o proximo node, ou seja, o node A aponta para B, que aponta para C, etc. Ex.:
A -> B -> C -> D -> E -> n
Caso tivessemos uma funcao com propriedades, a single linked list seria:
node<t> { val: T, next?: node<t> }

Em uma lista ligada dupla (double linked list), cada node tem uma referencia para o proximo e para o anterior, ou seja, o node A aponta para B, que aponta A e tambem aponta para C, etc. Ex.:

Caso tivessemos uma funcao com propriedades, a double linked list seria:
node<t> { val: T, next?: node<t>, prev?: node<t> }

Listas ligadas nao possuem indices, sendo assim, preciso ter acesso a um node, qual sera preciso atravessa-lo para chegar no node desejado.

Existem algumas operacoes com linked lists, sendo elas

- Deletar
- Adicionar
- Pegar o primeiro node (head), ou ultimo node (tail)
- Pegar a lista ligada como um todo

No caso da delecao, percebe-se ser mais rapido faze-la iniciando no head ou tail. Deletar pelo meio se torna mais demorado e custoso.

Porque comecar os estudos com listas ligadas?

- Toda single linked list eh um graph, mais teoricamente preciso, uma lista ligada eh uma arvore
