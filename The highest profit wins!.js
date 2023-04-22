function minMax(arr){
    let min = Math.min.apply(null, arr)
    let max = Math.max.apply(null, arr)
    let array = []
    array.push(min, max)
    return array
}