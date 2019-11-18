const { set } = require('immutable-object-update');

module.exports = (state, [ path, value ]) => set(state, path, value);
