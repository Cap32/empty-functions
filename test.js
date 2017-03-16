
var assert = require('assert');
var emptyFunctions = require('./');

assert(typeof emptyFunctions() === 'undefined');
assert(typeof emptyFunctions.default() === 'undefined');
assert(typeof emptyFunctions.noop() === 'undefined');
assert(typeof emptyFunctions.emptyFunction() === 'undefined');
assert(emptyFunctions.emptyFunctionReturnsTrue() === true);
assert(emptyFunctions.emptyFunctionReturnsFalse() === false);
assert(emptyFunctions.emptyFunctionReturnsNull() === null);
assert(emptyFunctions.emptyFunctionReturnsArgument('😍') === '😍');
assert(emptyFunctions.emptyFunctionReturnsThis() === emptyFunctions);
