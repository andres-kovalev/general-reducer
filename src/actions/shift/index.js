const { shiftN } = require('immutable-object-update');

/**
 * Removes an element (or number of elements) from the beginning of array
 * @function shift
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {number} [n=1] number of items to remove
 * @returns {object} action object
 * @docs
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.shift('a.b'));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.shift([ 'a', 'b' ]));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 2, 3 ]
 *     }
 * }
 * ```
 *
 * We can also pass number of items to remove as a 2nd argument:
 *
 * ```js
 * const updated = reducer(state, ACTIONS.shift('a.b', 2));
 * ```
 *
 * Then result will be:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 3 ]
 *     }
 * }
 *
 * ```
 */

module.exports = (state, [ path, n = 1 ]) => shiftN(state, path, n);
