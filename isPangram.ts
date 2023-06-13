function isPangram(string) {
    const lowerCase = string.toLowerCase().replace(/[^a-zA-Z]/g, '')
    let counter = []
    for (let i = 0; i < lowerCase.length; i++) {
        if (!counter.includes(lowerCase[i])) {
            counter.push(lowerCase[i])
        }
    }
    return counter.length === 26
}