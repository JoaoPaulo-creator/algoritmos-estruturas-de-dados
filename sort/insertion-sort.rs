fn insertion_sort(arr: &mut Vec<i32>) -> &mut Vec<i32> {
  let mut j: usize;
  let mut k: i32;

  for i in 1..arr.len() {
      k = arr[i];
      j = i;

      while j > 0 && arr[j - 1]  > k {
          arr[j] = arr[j - 1];
          j -= 1
      }
      arr[j] = k
  }
  return arr
}

fn main() {
  let mut arr = vec![12, 11, 13, 5, 6];
  println!("{:?}", insertion_sort(&mut arr)); // Print the sorted array
}
