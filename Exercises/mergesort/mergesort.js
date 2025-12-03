
function merge(left, right, iterationsObj) {
    // todo: prob could be faster
    let result = []
    let i = 0
    let j = 0


    while (i < left.length && j < right.length) {
        iterationsObj.count++ // loop run
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }

    }

    // slap leftovers on the end
    while (i < left.length) {
        iterationsObj.count++
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        iterationsObj.count++
        result.push(right[j])
        j++
    }

    return result
}

export function mergeSort(arr, iterationsObj = { count: 0 }) {
    iterationsObj.count++ // counting recursive hits

    // base case
    if (arr.length <= 1) {
        return {
            arr: arr.slice(), // return fresh array
            iterations: iterationsObj.count,
            sorted: true
        }

    }

    const mid = Math.floor(arr.length / 2)

    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    // sort both halves
    const leftRes = mergeSort(left, iterationsObj)
    const rightRes = mergeSort(right, iterationsObj)

    // merge
    const merged = merge(leftRes.arr, rightRes.arr, iterationsObj)

    // quick check if sorted, kinda meh but works
    let sorted = true
    for (let k = 1; k < merged.length; k++) {
        iterationsObj.count++
        if (merged[k] < merged[k - 1]) {
            sorted = false

            break
        }
    }

    return {
        arr: merged,
        iterations: iterationsObj.count,
        sorted
    }


}
