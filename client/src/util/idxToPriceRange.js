export const arrPriceRange = [
    "0-100000",
    "100000-200000",
    "200000-300000",
    "300000-400000",
    "400000-500000"
]

export const priceRangeToIndex = (priceRange) => {
    const index = arrPriceRange.findIndex(priceRg => priceRg === priceRange)
    return index
}