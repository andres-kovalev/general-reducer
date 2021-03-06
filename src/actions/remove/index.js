const { remove, removeN } = require('immutable-object-update');

/**
 * Removes item from object or array
 * @function remove
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {number} [n] number of items to remove (works only for arrays)
 * @returns {object} action object
 * @docs
 * This action can remove items from both arrays and objects:
 *
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         a1: 1,
 *         a2: 2
 *     },
 *     b: [ 1, 2, 3, 4 ]
 * };
 *
 * const updated = reducer(state, ACTIONS.remove('a.a1'));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.remove([ 'a', 'a1' ]));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         a2: 2
 *     },
 *     b: [ 1, 2, 3, 4 ]
 * }
 * ```
 *
 * To remove items from an array the path should ends with number:
 *
 * ```js
 * const updated = reducer(state, ACTIONS.remove('b.1'));
 * ```
 *
 * By default one item will be removed:
 *
 * ```js
 * {
 *     a: {
 *         a2: 2
 *     },
 *     b: [ 1, 3, 4 ]
 * }
 * ```
 *
 * To remove several items just provide number as 2nd argument:
 *
  * ```js
 * const updated = reducer(state, ACTIONS.remove('b.1', 2));
 * ```
 *
 * According number of items will be removed:
 *
 * ```js
 * {
 *     a: {
 *         a2: 2
 *     },
 *     b: [ 1, 4 ]
 * }
 * ```
 */

module.exports = (state, [ path, n ]) => (n ? removeN(state, path, n) : remove(state, path));
