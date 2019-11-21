const { pushAll } = require('immutable-object-update');

/**
 * Adds elements to the end of array
 * @function push
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {...any} value value to be added
 * @returns {object} action object
 * @docs
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.push('a.b', 2, 3));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.push([ 'a', 'b' ], 2, 3));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * }
 * ```
 */

module.exports = (state, [ path, ...items ]) => pushAll(state, path, items);
