'use strict';

var test = require('./1');
console.log(test.name);

var result = test.test(3);
console.log(result[0]());
console.log(result[1]());
console.log(result[2]());

