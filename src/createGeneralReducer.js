const { update } = require('immutable-object-update');
const generateReducer = require('reducer-generator');

const defaultCases = require('./actions');

module.exports = createGeneralReducer;

function createGeneralReducer(customUpdates, namespace = 'general') {
    const additionalCases = mapValues(
        customUpdates || {},
        map => (state, [ path, ...args ]) => update(
            state,
            path,
            object => map(object, ...args)
        )
    );

    const { TYPES, ACTIONS, reducer } = generateReducer({
        ...defaultCases,
        ...additionalCases
    }, namespace);

    return {
        TYPES,
        ACTIONS: mapValues(
            ACTIONS,
            action => (...args) => action(args)
        ),
        reducer
    };
}

function mapValues(object, map) {
    return Object.entries(object).reduce(
        (reduced, [ key, value ]) => Object.assign(reduced, {
            [key]: map(value, key, object)
        }),
        {}
    );
}
