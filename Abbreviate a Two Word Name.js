function abbrevName(name){
    let init = name.split(" ")
    let initials = init[0][0].toUpperCase() + "." + init[1][0].toUpperCase()
    return initials
}