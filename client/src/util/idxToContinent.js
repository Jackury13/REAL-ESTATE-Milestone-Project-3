export const arrContinent = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania"
]

export const continentToIdx = (continent) => {
    return arrContinent.findIndex((cont) => cont.toLowerCase() === continent.toLowerCase())
}

export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}