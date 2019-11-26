/**
 * Combines several actions
 * @function all
 * @param {...object} action action to combine
 * @returns {object} combined action object
 * @docs
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         a1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 *     }
 * };
 *
 * const trim = (path, n) => ACTIONS.all(
 *     ACTIONS.shift(path, n),
 *     ACTIONS.pop(path, n)
 * );
 *
 * const updated = reducer(state, trim('a.a1', 2));
 *
 * // or
 *
 * const updated = reducer(state, trim([ 'a', 'a1' ], 2));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         a1: [ 3, 4, 5, 6, 7, 8 ]
 *     }
 * }
 * ```
 */

module.exports = null;
