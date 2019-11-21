<a name="set"></a>

## set(path, value) ⇒ <code>object</code>
Sets value for item selected by path

**Returns**: <code>object</code> - action object  
**Params**

- path <code>number</code> | <code>string</code> | <code>Array.&lt;(string\|number)&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)
- value <code>any</code> - value to set in specified path



**Description**

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b1: 3,
        b2: 4
    }
};

const updated = reducer(state, ACTIONS.set('b.b1', 5));

// or

const updated = reducer(state, ACTIONS.set([ 'b', 'b1' ], 5));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b1: 3,
        b2: 5
    }
}
```