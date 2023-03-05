const leapYears = function(inputYear) {
    if (inputYear % 400 === 0 || (inputYear % 4 === 0 && inputYear % 100 !== 0))
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
