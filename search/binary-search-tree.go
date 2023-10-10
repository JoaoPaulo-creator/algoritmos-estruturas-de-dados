package main

import "fmt"

type Node struct {
	key   int
	left  *Node
	right *Node
}

func buildNode(key int) *Node {
	node := &Node{
		key:   key,
		left:  nil,
		right: nil,
	}

	return node
}

type BinarySearchTree struct {
	root *Node
}

func buildBinarySearchTree() *BinarySearchTree {
	treeNode := &BinarySearchTree{
		root: nil,
	}
	return treeNode
}

func (bst *BinarySearchTree) insert(node *Node, key int) *Node {
	if node == nil {
		node = buildNode(key)
		return node
	}

	if key < node.key {
		node.left = bst.insert(node.left, key)
	} else {
		node.right = bst.insert(node.right, key)
	}
	return node
}

func (bst *BinarySearchTree) deleteKey(key int) {
	bst.deleteRec(bst.root, key)
}

func (bst *BinarySearchTree) deleteRec(root *Node, key int) *Node {
	if root == nil {
		return root
	}
	// procurando pelo nó a ser deletado
	if key < root.key {
		root.left = bst.deleteRec(root.left, key)
	} else if key > root.key {
		root.right = bst.deleteRec(root.right, key)
	} else {
		// checando se o nó possui apenas um ou nenhum filho
		if root.left == nil {
			return root.right
		} else if root.right == nil {
			return root.left
		}

		/*
		   se o nó possuir dois filhos
		   Coloque o sucessor da ordem na posição do nó a ser excluído
		*/
		root.key = minValue(root.right)

		/*
		   deletando o nó sucessor
		*/
		root.right = bst.deleteRec(root.right, key)
	}

	return root
}

func (bst *BinarySearchTree) search(root *Node, key int) *Node {
	if root == nil || root.key == key {
		return root
	}

	if root.key < key {
		return bst.search(root.right, key)
	}

	return bst.search(root.left, key)

}

func minValue(root *Node) int {
	minValue := root.key

	for root.left != nil {
		minValue = root.left.key
		root = root.left
	}

	return minValue
}

func (bst *BinarySearchTree) String() string {
	return bst.printTree(bst.root)
}

// helper para printar a estrutura da struct apos montada, no terminal
// tanto essa funcao quanto a funcao acima, nao estao sendo explicitamente chamdas
// dentro da funcao main, porem, por fazerem parte da estrutura BinarySearchTree,
// o print formatado e bonitinho funciona
func (bst *BinarySearchTree) printTree(node *Node) string {
	if node == nil {
		return ""
	}

	result := fmt.Sprintf("%d", node.key)

	if node.left != nil || node.right != nil {
		result += " ("
		result += bst.printTree(node.left)
		if node.right != nil {
			result += ", " + bst.printTree(node.right)
		}
		result += ")"
	}

	return result
}

func main() {
	tree := buildBinarySearchTree()
	tree.root = tree.insert(tree.root, 50)

	tree.insert(tree.root, 30)
	tree.insert(tree.root, 3)
	tree.insert(tree.root, 2)
	tree.insert(tree.root, 20)
	tree.insert(tree.root, 40)
	tree.insert(tree.root, 70)
	tree.insert(tree.root, 60)
	tree.insert(tree.root, 80)

	key := 3

	if tree.search(tree.root, key) == nil {
		fmt.Println(key, " not found")
	} else {
		fmt.Printf("The key %v was found\n", key)
	}

	fmt.Println("Entire tree: ", tree)
	fmt.Println("deleting key 2")
	tree.deleteKey(2)
	fmt.Printf("tree after at least one leaf/key was deleted: \n")
	fmt.Println(tree)

}
