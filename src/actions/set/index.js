const { set } = require('immutable-object-update');

/**
 * Sets value for item selected by path
 * @function set
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {any} value value to set in specified path
 * @returns {object} action object
 * @docs
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         a1: 1,
 *         a2: 2
 *     },
 *     b: {
 *         b1: 3,
 *         b2: 4
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.set('b.b1', 5));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.set([ 'b', 'b1' ], 5));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         a1: 1,
 *         a2: 2
 *     },
 *     b: {
 *         b1: 3,
 *         b2: 5
 *     }
 * }
 * ```
 */

module.exports = (state, [ path, value ]) => set(state, path, value);
