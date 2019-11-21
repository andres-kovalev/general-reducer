<a name="unshiftAll"></a>

## unshiftAll(path, values) ⇒ <code>object</code>
Adds list of elements to the beginning of array

**Returns**: <code>object</code> - action object  
**Params**

- path <code>number</code> | <code>string</code> | <code>Array.&lt;(string\|number)&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)
- values <code>Array.&lt;any&gt;</code> - values to be added



**Description**

This action is similar to [unshift()](../unshift/README.md)
but consumes array of items as 2nd argument:

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        b: [ 1 ]
    }
};

const updated = reducer(state, ACTIONS.unshiftAll('a.b', [ 2, 3 ]));

// or

const updated = reducer(state, ACTIONS.unshiftAll([ 'a', 'b' ], [ 2, 3 ]));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 2, 3, 1 ]
    }
}
```