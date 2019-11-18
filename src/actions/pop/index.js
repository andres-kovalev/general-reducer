const { popN } = require('immutable-object-update');

module.exports = (state, [ path, n = 1 ]) => popN(state, path, n);
