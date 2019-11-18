const { unshiftAll } = require('immutable-object-update');

module.exports = (state, [ path, ...items ]) => unshiftAll(state, path, items);
