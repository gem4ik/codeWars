function openOrSenior(data){
    let memberArray = data.map(d=>{
        if (d[0]>=55 && d[1]>7) {
            return "Senior"
        } else return "Open"
    })
    return memberArray
}