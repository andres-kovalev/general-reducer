<a name="pop"></a>

## pop(path, [n]) ⇒ <code>object</code>
Removes an element (or number of elements) from the end of array

**Returns**: <code>object</code> - action object  
**Params**

- path <code>number</code> | <code>string</code> | <code>Array.&lt;(string\|number)&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)
- [n] <code>number</code> <code> = 1</code> - number of items to remove



**Description**

```js
import { ACTIONS, reducer } from 'general-reducer';

const state = {
    a: {
        b: [ 1, 2, 3 ]
    }
};

const updated = reducer(state, ACTIONS.pop('a.b'));

// or

const updated = reducer(state, ACTIONS.pop([ 'a', 'b' ]));
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 2 ]
    }
}
```

We can also pass number of items to remove as a 2nd argument:

```js
const updated = reducer(state, ACTIONS.pop('a.b', 2));
```

Then result will be

```js
{
    a: {
        b: [ 1 ]
    }
}

```