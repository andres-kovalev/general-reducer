const { remove, removeN } = require('immutable-object-update');

module.exports = (state, [ path, n ]) => (n ? removeN(state, path, n) : remove(state, path));
