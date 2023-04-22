function twoSort(s) {
    let sorted = s.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
    console.log(sorted)
    return sorted[0].split("").join("***")
}