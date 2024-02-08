const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR"
    }
    let rep = ""
    for(i = 0; i < num; i++){
        rep = rep.concat(str)
    }
    return rep;
};

// Do not edit below this line
module.exports = repeatString;
