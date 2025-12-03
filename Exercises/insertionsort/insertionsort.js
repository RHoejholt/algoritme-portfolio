export function insertionSort(arr) {
    let iterations = 0
    let sorted = true

    for (let i = 1; i < arr.length; i++) {
        iterations++ // outer loop

        let key = arr[i]
        let j = i - 1


        // move stuff to the right till key fits
        while (j >= 0 && arr[j] > key) {
            iterations++ // inner loop too
            arr[j + 1] = arr[j]
            j--
        }

        // todo: maybe check if it's already in right place
        arr[j + 1] = key
    }

    // check if sorted, quick and dirty
    for (let k = 1; k < arr.length; k++) {
        iterations++
        if (arr[k] < arr[k - 1]) {
            sorted = false
            break
        }

    }

    return {
        arr,
        iterations,
        sorted,
    }
}
