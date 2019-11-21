const { unshiftAll } = require('immutable-object-update');

/**
 * Adds list of elements to the beginning of array
 * @function unshiftAll
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {any[]} values values to be added
 * @returns {object} action object
 * @docs
 * This action is similar to [unshift()](../unshift/README.md)
 * but consumes array of items as 2nd argument:
 *
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.unshiftAll('a.b', [ 2, 3 ]));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.unshiftAll([ 'a', 'b' ], [ 2, 3 ]));
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 2, 3, 1 ]
 *     }
 * }
 * ```
 */

module.exports = (state, [ path, items ]) => unshiftAll(state, path, items);
