package main

import "fmt"

type StackArray struct {
  maxSize int
  stackArray []int
  top int
}

func newStackArray(size int) *StackArray{
  stack := &StackArray{
    maxSize: size,
    stackArray: make([]int, size),
    top: -1,
  }
 return stack
}

func (s *StackArray) push(value int) {
  if !s.ifFull() {
    s.top++
    s.stackArray[s.top] = value
  } else {
    s.resize(s.maxSize * 2)
    s.push(value)
  }
}


func (s *StackArray) pop() int {
  if !s.isEmpty() {
    return s.stackArray[s.top -1]
  }

  if s.top < s.maxSize / 4 {
    s.resize(s.maxSize / 2)
    return s.pop()

  } else {
    fmt.Println("A stack ja esta vazia")
    return -1
  }
}

func (s *StackArray) peek() int {
  if !s.isEmpty() {
    return s.stackArray[s.top]
  } else {
    fmt.Println("Stack esta vazia. Nao sera possivel retornar o elemento do pico")
    return -1
  }
}

func (s *StackArray) resize(newSize int) {
  transferArray := make([]int, newSize)

  for i := 0; i < len(s.stackArray); i++ {
    transferArray[i] = s.stackArray[i]
  }

  s.stackArray = transferArray
  s.maxSize = newSize

}



func (s *StackArray) isEmpty() bool {
  return s.top == -1
}


func (s *StackArray) ifFull() bool {
  return s.top + 1 == s.maxSize
}

func (s *StackArray) makeEmpty() {
  s.top = -1
}

func (s *StackArray) size() int {
  return s.top + 1
}


func main() {
  stackArray := newStackArray(4)

  stackArray.push(5)
  stackArray.push(8)
  stackArray.push(2)
  stackArray.push(8)
  stackArray.push(9)


  fmt.Println("A stack esta vazia? ", !stackArray.isEmpty())
  fmt.Println("A stack esta preenchida/cheia? ", stackArray.ifFull())
  fmt.Println("O ponto mais alto da stack, eh igual a 9? ", stackArray.peek() == 9)
  fmt.Println(stackArray.pop() == 9)
  fmt.Println("O ponto mais alto da stack, eh igual a 2? ", stackArray.peek() == 2)

  fmt.Println(stackArray.size() == 3)
  fmt.Println(stackArray)


}
