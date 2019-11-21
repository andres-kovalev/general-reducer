const { insertAll } = require('immutable-object-update');

/**
 * Inserts elements (provided with array) to the specified position of array
 * @function insertAll
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {any[]} values values to be inserted
 * @returns {object} action object
 * @docs
 * This action is similar to [insert()](../insert/README.md)
 * but consumes array of items as 2nd argument:
 *
 * ```js
 * import { ACTIONS, reducer } from 'general-reducer';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * };
 *
 * const updated = reducer(state, ACTIONS.insertAll('a.b.1', [ 3, 4 ]));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.insertAll([ 'a', 'b', 'b1' ], [ 3, 4 ]));
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

module.exports = (state, [ path, items ]) => insertAll(state, path, items);
