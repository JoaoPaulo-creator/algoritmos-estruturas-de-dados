data LinkedList a = Empty | Node a (LinkedList a) deriving (Show, Read, Eq)

addNode :: a -> LinkedList a -> LinkedList a
addNode x Empty = Node x Empty
addNode x (Node y ys) = Node y (addNode x ys)

main :: IO ()
main = do
  -- adding nodes from right to left to right
  let list = addNode 5 (addNode 4 (addNode 3 Empty))
  print list
