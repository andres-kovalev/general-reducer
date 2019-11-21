<a name="unshift"></a>

## unshift(path, ...value) ⇒ <code>object</code>
Adds elements to the beginning of array

**Returns**: <code>object</code> - action object  
**Params**

- path <code>number</code> | <code>string</code> | <code>Array.&lt;(string\|number)&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)
- ...value <code>any</code> - value to be added



**Description**

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        b: [ 1 ]
    }
};

const updated = reducer(state, ACTIONS.unshift('a.b', 2, 3));

// or

const updated = reducer(state, ACTIONS.unshift([ 'a', 'b' ], 2, 3));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 2, 3, 1 ]
    }
}
```