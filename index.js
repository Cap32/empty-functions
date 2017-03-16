var emptyFunction = require('./empty-function')
module.exports = {
	noop: require('./noop'),
	emptyFunction: require('./empty-function'),
	emptyFunctionReturnsTrue: require('./empty-function-returns-true'),
	emptyFunctionReturnsFalse: require('./empty-function-returns-false'),
	emptyFunctionReturnsNull: require('./empty-function-returns-null'),
	emptyFunctionReturnsThis: require('./empty-function-returns-this'),
	emptyFunctionReturnsArgument: require('./empty-function-returns-argument')
}