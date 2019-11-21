const { pushAll } = require('immutable-object-update');

/**
 * Adds list elements to the end of array
 * @function pushAll
 * @param {number | string | Array<string | number>} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {any[]} values values to be added
 * @returns {object} action object
 * @docs
 * This action is similar to [push()](../push/README.md)
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
 * const updated = reducer(state, ACTIONS.pushAll('a.b', [ 2, 3 ]));
 *
 * // or
 *
 * const updated = reducer(state, ACTIONS.pushAll([ 'a', 'b' ], [ 2, 3 ]));
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

module.exports = (state, [ path, items ]) => pushAll(state, path, items);
