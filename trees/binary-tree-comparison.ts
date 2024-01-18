/**
 *
* a ideia eh comparar estruturalmente se duas arvores binarias sao iguais
 *
 * */

class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null,): boolean {

  // aqui esta o base case, e a partir daqui, eh possivel identificar que estruturalmente ambas as arvores sao iguais
  // pois esse base case sera verdadeiro quando ambas as arvores forem igual nulas, o que sera verdadeiro, ou seja, as duas arvores tem a mesma estrutura
  if (a === null && b === null) {
    return true
  }

  // aqui esta o segundo base case, e a partir daqui, eh possivel identificar que estruturalmente ambas as arvores sao iguais
  // nesse caso, o base verifica uma das arvores sao nulas, o que faz com que a comparacao retorne falso,
  // pois se uma delas for igual a null, e consequentemente a outra nao, entao a comparacao indica que nao, as arvores nao sao iguais
  if (a === null || b === null) {
    return false
  }

  // EDIT: na verdade, os ifs acima estao validando as subtrees, ou seja, quando uma arvore tem seu nodes/filhos/leafs, esses nodes representam uma sub arvore
  // pois os nodes filhos tambem poderao ter seus filhos. Dito isso, os ifs acimas estao caminhando desde o root ate um node null/undefined, na arvore em questao.
  // Ambos validam a estrutura da arvore


  // nas condicionais acima, esta sendo levado em consideracao que a arvore pode ser ou nao nula, ou seja, nao verifica diretamente os valores delas, ou seja,
  // a arvore pode nao ser nula, porem ate o momento nao foi feito a verificacao dos valores, caso ambas sejam diferente de null.
  // essa verificacao sera realizada logo abaixo


  // nessa condicinal, leva-se em consideracao que as arvores possuem filhos e nodes, e entao esses valores estao sendo diretamente verificados
  // se o valor de um dos nodes for diferente em uma das arvors, logo estruturalmente as arvores serao diferentes, portanto
  // o return sera false
  //
  //
  // EDIT: esse if valida os valores que estao nos nodes da arvore
  if(a.value !== b.value) {
    return false
  }

  // e aqui no final, com o uso de recursao, sera consultado e validado as subarvores de ambas as arvores que estao sendo comparadas
  // o lado e o lado direito
  return compare(a.left, b.left) && compare(a.right, b.right)
}


const binaryTreeA = new BinaryNode(1);
binaryTreeA.left = new BinaryNode(2);
binaryTreeA.left.left = new BinaryNode(3);
binaryTreeA.left.right = new BinaryNode(4);
binaryTreeA.right = new BinaryNode(4);
binaryTreeA.right.left = new BinaryNode(8);
binaryTreeA.right.right = new BinaryNode(21);

const binaryTreeB = new BinaryNode(1);
binaryTreeB.left = new BinaryNode(2);
binaryTreeB.left.left = new BinaryNode(3);
binaryTreeB.left.right = new BinaryNode(4);

console.log('arvores A e B sao iguais? ', compare(binaryTreeA, binaryTreeB))
// arvors iguais

const binaryTreeC = new BinaryNode(1);
binaryTreeC.left = new BinaryNode(2);
binaryTreeC.left.left = new BinaryNode(3);
binaryTreeC.left.right = new BinaryNode(4);
binaryTreeC.right = new BinaryNode(4);
binaryTreeC.right.left = new BinaryNode(8);
binaryTreeC.right.right = new BinaryNode(21);

const binaryTreeD = new BinaryNode(1);
binaryTreeD.left = new BinaryNode(2);
binaryTreeD.left.left = new BinaryNode(3);
binaryTreeD.left.right = new BinaryNode(4);
binaryTreeD.right = new BinaryNode(4);
binaryTreeD.right.left = new BinaryNode(8);
binaryTreeD.right.right = new BinaryNode(21);

console.log('arvores C e D sao iguais? ', compare(binaryTreeC, binaryTreeD))
// arvors iguais

