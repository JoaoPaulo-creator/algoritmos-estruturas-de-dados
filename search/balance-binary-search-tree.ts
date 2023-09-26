/**
 *
 * balanceando uma arvore binaria
 * uma árvore binária de busca balanceada ou árvore binária de busca auto-balanceada é qualquer árvore de busca binária que automaticamente mantém a sua altura pequeno mesmo depois de sucessivas inserções e exclusões arbitrária
 *
 * @see https://pt.wikipedia.org/wiki/%C3%81rvore_bin%C3%A1ria_de_busca_balanceada
 */
class BaseTreeNode {
  data: number;
  left: BaseTreeNode | null;
  right: BaseTreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: BaseTreeNode;

  storeBSTNodes(root: BaseTreeNode | null, nodes: BaseTreeNode[]) {
    if (root === null) {
      return;
    }

    this.storeBSTNodes(root.left, nodes);
    nodes.push(root);
    this.storeBSTNodes(root.right, nodes);
  }

  buildTreeUtil(
    nodes: BaseTreeNode[],
    start: number,
    end: number
  ): BaseTreeNode | null {
    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let node = nodes[mid];

    node.left = this.buildTreeUtil(nodes, start, mid - 1);
    node.right = this.buildTreeUtil(nodes, mid + 1, end);

    return node;
  }

  buildTree(root: BaseTreeNode) {
    let nodes: BaseTreeNode[] = new Array();
    this.storeBSTNodes(root, nodes);

    let n: number = nodes.length;
    return this.buildTreeUtil(nodes, 0, n - 1);
  }

  preOrder(node: BaseTreeNode | null) {
    if (node === null) {
      return;
    }

    console.log(node.data, "\n");
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

function execute() {
  let tree: any = new BinaryTree();
  tree.root = new BaseTreeNode(10);
  tree.root.left = new BaseTreeNode(8);
  tree.root.left.left = new BaseTreeNode(7);
  tree.root.left.left.left = new BaseTreeNode(6);
  tree.root.left.left.left.left = new BaseTreeNode(5);

  console.log("tree.root before balancing: ", tree.root);
  tree.root = tree.buildTree(tree.root);
  console.log("Preondem transversal da arvore binaria balanceada: ");
  tree.preOrder(tree.root);
  console.log("tree.root after balancing: ", tree.root);
}

execute();
