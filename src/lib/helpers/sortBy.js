function sortBy(array, key, reverse=true) {
    let sign = -1
    if (!reverse) {
        sign = 1
    } 
    function compare(a, b) {
        if (a[key] < b[key]) {
            return -1 * sign
        }
        if (a[key] > b[key]) {
            return 1 * sign
        }
        return 0

    }


    return array.sort(compare)
}


export default sortBy
