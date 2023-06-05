function isValidWalk(walk) {
    const w= walk.filter( w=> {return w === 'w'}).length
    const e= walk.filter( e=> {return e === 'e'}).length
    const s= walk.filter( s=> {return s === 's'}).length
    const n= walk.filter( n=> {return n === 'n'}).length

    return walk.length === 10 && w===e && s===n
}