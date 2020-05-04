const stringCalc=(text) => {
    const strList = text.split(',');

    const numList = strList.map((str) => { 
        return parseInt(str, 10)   //returns number value in the given number system
    })
    const clearedNumlist = numList.filter((num) => {
        return !isNaN(num); //filters values that are NaN
    })

    var result = 0;

    clearedNumlist.forEach((num) => {
        result = result + num;
    })
    return result;
}

    
module.exports = {stringCalc}