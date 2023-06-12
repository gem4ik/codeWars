function comp(array1, array2) {
    if ((array1 === null || array2 === null) || (array1.length !== array2.length)) {
        return false
    } else if (array1.length === 0 || array2.length === 0) {
        return true
    } else {
        let arr1 = array1.map(el=> el*el).sort((a,b) => a - b)
        let arr2 = array2.sort((a,b) => a - b)
        return arr1.join() === arr2.join()
    }
}