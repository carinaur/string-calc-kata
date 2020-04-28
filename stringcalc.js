const stringCalc=(text) => {
    const strList = text.split(',');

    if (strList[0].length === 0){
        var firstNum = 0;
    }
    else {
        var firstNum = parseInt(strList[0], 10);
    }
    
    //statement can be replaced with (cond)?"":"" to shorten code
    if (strList[1]) {
        if (strList[1].length === 0){
            var secondNum = 0;
        }

        else{
            var secondNum = parseInt(strList[1], 10);
        }

    } else {
        secondNum = 0;
    }

    return firstNum + secondNum;
};

    
module.exports = {stringCalc}