<a name="insert"></a>

## insert(path, ...value) ⇒ <code>object</code>
Inserts elements to the specified position of array

**Returns**: <code>object</code> - action object  
**Params**

- path <code>number</code> | <code>string</code> | <code>Array.&lt;(string\|number)&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)
- ...value <code>any</code> - values to be inserted



**Description**

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        b: [ 1, 2 ]
    }
};

const updated = reducer(state, ACTIONS.insert('a.b.1', 3, 4));

// or

const updated = reducer(state, ACTIONS.insert([ 'a', 'b', 'b1' ], 3, 4));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 3, 4, 2 ]
    }
}
```