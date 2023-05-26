function duplicateEncode(word){
    let newStr = ""
    for (i=0; i<word.length; i++) {
        if (word.toLowerCase().indexOf(word.toLowerCase()[i]) == word.toLowerCase().lastIndexOf(word.toLowerCase()[i])) {
            newStr += "("
        }else{
            newStr += ")"
        }
    }
    return newStr
}
