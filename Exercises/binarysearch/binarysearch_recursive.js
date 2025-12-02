function binarySearchRecursive(search, values, start, end, iterations = 0, comparator) {
    console.group(`rec call ${iterations}`)

    // default comparator if none provided
    comparator = comparator || ((a, b) => a - b)

    // base case: if no more search space
    if (start > end) {
        console.groupEnd()
        return { found: false, index: -1, iterations: iterations + 1 }
    }

    // find middle index
    const mid = Math.floor((start + end) / 2)
    const cmp = comparator(values[mid], search)

    // check middle
    if (cmp === 0) {
        console.groupEnd()
        return { found: true, index: mid, iterations: iterations + 1 }
    } else if (cmp > 0) {
        // search left
        const res = binarySearchRecursive(search, values, start, mid - 1, iterations + 1, comparator)
        console.groupEnd()
        return res
    } else {
        // search right
        const res = binarySearchRecursive(search, values, mid + 1, end, iterations + 1, comparator)
        console.groupEnd()
        return res
    }
}

module.exports = { binarySearchRecursive }
