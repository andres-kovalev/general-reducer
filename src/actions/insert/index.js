const { insertAll } = require('immutable-object-update');

module.exports = (state, [ path, ...items ]) => insertAll(state, path, items);
