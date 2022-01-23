const nbYear = (p0, percent, aug, p) => {
    let currentPop = p0;
    let numYears = 0;

    while(currentPop < p){
        numYears++;
        currentPop = currentPop * (1 + percent/100) + aug
    }

    return numYears
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))