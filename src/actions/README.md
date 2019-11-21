# Operations

There are several built-in actions:

* [insert(path, value)](insert/README.md)
* [insertAll(path, values)](insertAll/README.md)
* [pop(path, n)](pop/README.md)
* [push(path, value)](push/README.md)
* [pushAll(path, values)](pushAll/README.md)
* [remove(path, n)](remove/README.md)
* [set(path, value)](set/README.md)
* [shift(path, n)](shift/README.md)
* [unshift(path, value)](unshift/README.md)
* [unshiftAll(path, values)](unshiftAll/README.md)

To use those just import `ACTIONS` object:

```js
import { ACTIONS } from 'general-reducer';

// or

import { createGeneralReducer } from 'general-reducer';

const { ACTIONS } = createGeneralReducer(...);

...

dispatch(ACTIONS.set(...));
```

If by some reason you need action type constants, they are available as well:

```js
import { TYPES } from 'general-reducer';

// or

import { createGeneralReducer } from 'general-reducer';

const { TYPES } = createGeneralReducer(...);

...

dispatch({ type: TYPES.set, payload: ... });
```

