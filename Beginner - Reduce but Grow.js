function grow(x){
    let start = 1
    let mult = x.reduce((a, b) => a * b, start)
    return mult
}