fn partition(arr: &mut [i32]) -> usize {
    let pivot_index = arr.len() / 2;
    arr.swap(pivot_index, arr.len() - 1);

    let mut i = 0;
    for j in 0..arr.len() - 1 {
        if arr[j] <= arr[arr.len() - 1] {
            arr.swap(i, j);
            i += 1
        }
    }

    arr.swap(i, arr.len() - 1);
    return i;
}

fn quick_sort(arr: &mut [i32]) {
    if arr.len() < 1 {
        return;
    }
    let pivot_index = partition(arr);

    quick_sort(&mut arr[0..pivot_index]);
    quick_sort(&mut arr[pivot_index + 1..])
}

fn main() {
    let mut unsorted_array = vec![12, 11, 13, 5, 6, 2, -1, 4, -21, 34, 21, 38, 22];
    quick_sort(&mut unsorted_array);
    println!("{:?}", unsorted_array);
}
