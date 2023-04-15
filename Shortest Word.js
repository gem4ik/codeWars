function findShort(s){
    let shortest = s.split(" ").map( w=>w.length)
    console.log(shortest)
    let min = Math.min.apply(0, shortest)
    return min
}
