// O algoritmo de Kruskal é um algoritmo em teoria dos grafos que busca uma árvore geradora mínima para um grafo conexo com pesos. Isto significa que ele encontra um subconjunto das arestas que forma uma árvore que inclui todos os vértices, onde o peso total, dado pela soma dos pesos das arestas da árvore, é minimizado. Se o grafo não for conexo, então ele encontra uma floresta geradora mínima (uma árvore geradora mínima para cada componente conexo do grafo). O algoritmo de Kruskal é um exemplo de um algoritmo guloso (também conhecido como ganancioso ou greedy).

// https://pt.wikipedia.org/wiki/Algoritmo_de_Kruskal

package main

import (
	"fmt"
	"sort"
)

func comparator(p1, p2 interface{}) int {
	x := p1.([3]int)
	y := p2.([3]int)

	return x[2] - y[2]
}

func makeSet(parent, rank []int, n int) {
	for i := 0; i < n; i++ {
		parent[i] = i
		rank[i] = 0
	}
}

func findParent(parent []int, component int) int {
	if parent[component] == component {
		return component
	}

	parent[component] = findParent(parent, parent[component])
	return parent[component]
}

func unionSet(u, v int, parent, rank []int, n int) {
	u = findParent(parent, u)
	v = findParent(parent, v)

	if rank[u] < rank[v] {
		parent[u] = v
	} else if rank[u] > rank[v] {
		parent[v] = u
	} else {
		parent[v] = u

		rank[u]++
	}
}

func kruskalAlgo(n int, edge [][3]int) {
	sort.Slice(edge, func(i, j int) bool {
		return comparator(edge[i], edge[j]) < 0
	})
	parent := make([]int, n)
	rank := make([]int, n)

	makeSet(parent, rank, n)

	minCost := 0

	fmt.Printf("Seguindo os edges no MST construido:\n")

	for i := 0; i < n; i++ {
		v1 := findParent(parent, edge[i][0])
		v2 := findParent(parent, edge[i][1])
		wt := edge[i][2]

		if v1 != v2 {
			unionSet(v1, v2, parent, rank, n)
			minCost += wt
			fmt.Printf("%d -- %d == %d\n", edge[i][0], edge[i][1], wt)
		}
	}

	fmt.Printf("Custo minimo da Spanning tree: %d\n", minCost)
}

func main() {
	edge := [][3]int{
		{0, 1, 10},
		{0, 2, 6},
		{0, 3, 5},
		{1, 3, 15},
		{2, 3, 4},
	}

	kruskalAlgo(5, edge)

}
