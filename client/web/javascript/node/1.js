'use strict';

function test(x){
    var i,arr = [];
    for(i=0;i<x;i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}

module.exports = {
    test : test,
    name : 'zjs'
};
console.log(module);

