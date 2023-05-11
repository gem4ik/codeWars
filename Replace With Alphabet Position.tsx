function alphabetPosition(text) {
    let newStr = text.toLowerCase().replace(/[^A-Z]/gi, '').split('').map( e => {
        return e.charCodeAt(0) -96
    }).join(" ")
    return newStr
}