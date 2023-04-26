function removeUrlAnchor(url){
    let newStr = url.split('#')
    return newStr[0]
}