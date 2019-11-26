<a name="all"></a>

## all(...action) ⇒ <code>object</code>
Combines several actions

**Returns**: <code>object</code> - combined action object  
**Params**

- ...action <code>object</code> - action to combine



**Description**

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        a1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    }
};

const trim = (path, n) => ACTIONS.all(
    ACTIONS.shift(path, n),
    ACTIONS.pop(path, n)
);

const updated = reducer(state, trim('a.a1', 2));

// or

const updated = reducer(state, trim([ 'a', 'a1' ], 2));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: [ 3, 4, 5, 6, 7, 8 ]
    }
}
```