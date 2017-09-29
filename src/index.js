module.exports = function check(str, bracketsConfig) {
    'use strict';

    if (str.length % 2 != 0)
        return false;

    let string = str.split('');
    let bufferStack = [];

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < bracketsConfig.length; j++){
            //console.log("str[i]="+str[i]+" === bracket[j][1]="+bracketsConfig[j][1]+" && bufferStack="+bufferStack[bufferStack .length - 1]+ "=== bracket[j][0]="+bracketsConfig[j][0]);

            if (string[i] === bracketsConfig[j][1] && bufferStack[bufferStack.length - 1] === bracketsConfig[j][0])
                bufferStack.pop();
            else if (string[i] === bracketsConfig[j][0])
                bufferStack.push(string[i]);
        }
    }
    return bufferStack.length === 0 ? true : false;
}
