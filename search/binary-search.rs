fn binary_search(target: i32, nums: Vec<i32>) -> Optional<usize> {
    let mut left = nums[0];
    let mut right = nums.len() - 1;

    while left <= right {
      let mut mid = ((left + right) as f64 / 2.0).floor() as i32
      if nums[mid] == target {
        return Some(mid)
      } else if nums[mid] < target {
        left = mid + 1
      } else {
        right = mid
      }
    }
    None
}

fn main() {
  let nums = vec![1, 2, 3, 4, 5, 6, 7, 8, 9];
    let target = 5;
    match binary_search(target, nums) {
        Some(index) => println!("Element found at index {}", index),
        None => println!("Element not found"),
    }
}
