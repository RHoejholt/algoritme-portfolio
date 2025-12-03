// the best sorting algo :)

export function bogoSort(arr) {
    let iterations = 0

    // check if arr is sorted
    function isSorted(a) {
        for (let i = 1; i < a.length; i++) {
            iterations++
            if (a[i] < a[i - 1]) return false
        }
        return true
    }

    // let jesus take the wheel
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            iterations++
            const j = Math.floor(Math.random() * (i + 1))
            const tmp = a[i]
            a[i] = a[j]

            a[j] = tmp
        }

    }

    // keep shuffling till sorted... lol
    while (!isSorted(arr)) {
        iterations++
        shuffle(arr)
        // todo: maybe add a safety limit
    }

    return {
        arr,
        iterations,
        sorted: true
    }


}
