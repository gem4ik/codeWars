function DNAtoRNA(dna) {
    let newStr = dna.replace(/t/gi, "U")
    console.log(newStr)
    return newStr
}