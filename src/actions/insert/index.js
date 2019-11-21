const { insertAll } = require('immutable-object-update');

/**
 * Inserts elements to the specified position of array
 * @function insert
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {...any} value values to be inserted
 * @returns {object} action object
 * @docs
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.insert('a.b.1', 3, 4));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.insert([ 'a', 'b', 'b1' ], 3, 4));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 3, 4, 2 ]
 *     }
 * }
 * ```
 */

module.exports = (state, [ path, ...items ]) => insertAll(state, path, items);
