const removeFromArray = function(list, ...args) {
    for(i = 0; i < args.length; i++){
        for(j = 0; j < list.length; j++){
            if (args[i] === list[j]){
                list.splice(j, 1)
                j--;
            }
        }
    }
    return list
};

// Do not edit below this line
module.exports = removeFromArray;
