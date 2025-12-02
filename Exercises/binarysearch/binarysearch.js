
export function binarySearch(searchFor, values) {
    // start search at the whole array
    let low = 0;
    let high = values.length - 1;
    let iterations = 0; // countin' loops cuz we need to


    while (low <= high) {
        iterations++;

        const mid = Math.floor((low + high) / 2);

        const currentValue = values[mid];

        if (currentValue === searchFor) {
            return {
                found: true,
                index: mid,
                iterations: iterations
            };
        } else if (currentValue < searchFor) {
            // the value is too small, so we ditch the left half
            low = mid + 1; // move low to one position right of mid
        } else { // currentValue > searchFor
            // the value is too big, so we ditch the right half
            high = mid - 1; // move high to one position left of mid
        }
    }

    return {
        found: false,
        index: -1, // always -1 if not found
        iterations: iterations
    };
}