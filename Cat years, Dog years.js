var humanYearsCatYearsDogYears = function(humanYears) {
    let catAge = 0
    let dogAge = 0
    return (humanYears == 1)? [1,15,15]: (humanYears == 2)? [2,24,24]: [humanYears, (24+(humanYears-2)*4), (24+(humanYears-2)*5)]
}
