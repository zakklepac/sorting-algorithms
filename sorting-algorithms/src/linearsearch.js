let linearSearch = (array, magicNumber) => {
    for (let i = 0; i <= array.length; i++) {
        if (arr[i] === magicNumber) return i
    }
    return -1
}