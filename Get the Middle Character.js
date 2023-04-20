function getMiddle(s){
    if (s.length%2 == 0){
        let newStr = s[s.length/2-1] += s[s.length/2]
        return newStr
    } else {
        let middleIndex = Math.floor(s.length/2)
        return s[middleIndex]
    }
}