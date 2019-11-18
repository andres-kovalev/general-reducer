const createGeneralReducer = require('./createGeneralReducer');

module.exports = {
    createGeneralReducer,
    ...createGeneralReducer()
};
