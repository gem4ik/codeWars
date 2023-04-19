function XO(str) {
    let x = str.replace(/\x/gi, "")
    let y = str.replace(/\o/gi, "")
    let boo = (x.length == y.length)
    return boo
}