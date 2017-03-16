
var assert = require('assert');
var emptyFunctions = require('./');

assert(typeof emptyFunctions() === 'undefined');
assert(typeof emptyFunctions.default() === 'undefined');
assert(typeof emptyFunctions.noop() === 'undefined');
assert(typeof emptyFunctions.emptyFunction() === 'undefined');
assert(emptyFunctions.returnsTrue() === true);
assert(emptyFunctions.returnsFalse() === false);
assert(emptyFunctions.returnsNull() === null);
assert(emptyFunctions.returnsArgument('😍') === '😍');
assert(emptyFunctions.returnsThis() === emptyFunctions);
