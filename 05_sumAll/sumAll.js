const sumAll = function(numOne,numTwo) {
    if (numOne < 0 || numTwo < 0) {return "ERROR";}
    if (typeof(numOne) !== "number" || typeof(numTwo) !== "number") {return "ERROR";}

    if (numOne > numTwo)
    {
        startNumber = numTwo;
        endNumber = numOne;
    }
    else
    {
        startNumber = numOne;
        endNumber = numTwo;       
    }
    let sum = 0;
    let newArr = [];
    // let's try using a for ...of loop!

    for(i = startNumber; i <= endNumber;i++)
    {
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
