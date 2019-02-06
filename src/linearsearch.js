let linearSearch = (array, magicNumber) => {
    for (let i = 0; i <= array.length; i++) {
        if (arr[i] === magicNumber) return i
    }
    return -1
}

module.exports = linearSearch


//                  /\  how this works
// /\/\/\/\/\/\/\/\/  \
// 1 2 3 4 5 6 7 8 9  10