function findAverage(array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum +=array[i]
    }
    if (sum == NaN | sum == "") {
        return 0
    }else return sum/array.length
}