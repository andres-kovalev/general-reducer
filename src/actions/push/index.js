const { pushAll } = require('immutable-object-update');

module.exports = (state, [ path, ...items ]) => pushAll(state, path, items);
