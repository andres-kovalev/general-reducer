const { popN } = require('immutable-object-update');

/**
 * Removes an element (or number of elements) from the end of array
 * @function pop
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
 * const updated = reducer(state, ACTIONS.pop('a.b'));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.pop([ 'a', 'b' ]));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * }
 * ```
 *
 * We can also pass number of items to remove as a 2nd argument:
 *
 * ```js
 * const updated = reducer(state, ACTIONS.pop('a.b', 2));
 * ```
 *
 * Then result will be
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1 ]
 *     }
 * }
 *
 * ```
 */

module.exports = (state, [ path, n = 1 ]) => popN(state, path, n);
