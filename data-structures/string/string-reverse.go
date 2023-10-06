package main

import "fmt"

func reverseWords(word string) {
	tmp := make([]string, 0)
	str := ""

	for i := 0; i < len(word); i++ {
		if word[i] == ' ' {
			tmp = append(tmp, str)
			str = ""
		} else {
			str += string(word[i])
		}
	}

	tmp = append(tmp, str)

	for i := len(tmp) - 1; i > 0; i-- {
		fmt.Printf(tmp[i] + " ")
	}

	fmt.Println(tmp[0])

}

func main() {
	word := "Meu texto exemplo"
	reverseWords(word)
}
