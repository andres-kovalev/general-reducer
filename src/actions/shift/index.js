const { shiftN } = require('immutable-object-update');

module.exports = (state, [ path, n = 1 ]) => shiftN(state, path, n);
