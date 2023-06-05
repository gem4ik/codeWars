function squareDigits(num){
    const newNum = num.toString().split('')
    const numAsString = newNum.map(n=> n**2).join('')
    return +numAsString
}