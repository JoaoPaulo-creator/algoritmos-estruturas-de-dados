/**
 * @see
 * https://pt.wikipedia.org/wiki/%C3%81rvore_bin%C3%A1ria_de_busca
 * Em Ciência da computação, uma árvore binária de busca é uma estrutura de dados de árvore binária baseada em nós,
 * onde todos os nós da subárvore esquerda possuem um valor numérico inferior ao nó raiz e todos os nós da subárvore
 * direita possuem um valor superior ao nó raiz.
 */

class TreeNode {
  key: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  /** 
   * 
   helper function para inserir um novo nó com a chave cedida na BST
   * 
  */
  insert(node: TreeNode | null, key: number): TreeNode | null {
    if (node === null) {
      const node = new TreeNode(key);
      return node;
    }

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    }
    // retorna o ponteiro não mexido do nó
    return node;
  }

  search(root: TreeNode | null, key: number) {
    // cheva se a raiz é nula ou se a chave informada é igual a raiz
    if (root === null || root.key === key) {
      return root;
    }
    // aqui é a situação onde a chave for maior que que a chave do raiz
    if (root.key < key) {
      return this.search(root.right, key);
    }

    return this.search(root.left, key);
  }

  deleteKey(key: number): void {
    this.deleteRec(this.root, key);
  }

  private deleteRec(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
      return root;
    }
    // procurando pelo nó a ser deletado
    if (key < root.key) {
      root.left = this.deleteRec(root.left, key);
    } else if (key > root.key) {
      root.right = this.deleteRec(root.right, key);
    } else {
      // checando se o nó possui apenas um ou nenhum filho
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      /*
        se o nó possuir dois filhos
        Coloque o sucessor da ordem na posição do nó a ser excluído
      */
      root.key = this.minValue(root.right);

      /*
        deletando o nó sucessor
      */
      root.right = this.deleteRec(root.right, root.key);
    }

    return root;
  }

  private minValue(root: TreeNode) {
    let minValue = root.key;
    while (root.left !== null) {
      minValue = root.left.key;
      root = root.left;
    }

    return minValue;
  }
}

function main() {
  // inserindo os nós
  const tree = new BinarySearchTree();
  tree.root = tree.insert(tree.root, 50);

  tree.insert(tree.root, 30);
  tree.insert(tree.root, 3);
  tree.insert(tree.root, 2);
  tree.insert(tree.root, 20);
  tree.insert(tree.root, 40);
  tree.insert(tree.root, 70);
  tree.insert(tree.root, 60);
  tree.insert(tree.root, 80);

  // a chave a ser encontrada dentro da minha arvore
  const key: number = 30;

  if (tree.search(tree.root, key) === null) {
    console.log(key, " not found");
  } else {
    console.log(`the key ${key} was found`);
  }

  console.log("the entire tree: ", tree, "\n");

  console.log("deleting the key 2");
  tree.deleteKey(20);
  console.log("tree after at least one leaf was deleted: ", tree);
}

main();
