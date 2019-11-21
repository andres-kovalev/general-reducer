[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/general-reducer.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/general-reducer)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/general-reducer.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/general-reducer)
[![downloads](https://img.shields.io/npm/dm/general-reducer.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/general-reducer)
[![node](https://img.shields.io/node/v/general-reducer.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/general-reducer.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/general-reducer)
[![MIT](https://img.shields.io/npm/l/general-reducer.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/general-reducer/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/general-reducer.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/general-reducer)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

# general-reducer

General purpose reducer generator

* full documentation can be found on [https://andres-kovalev.github.io/general-reducer/](https://andres-kovalev.github.io/general-reducer/)

# Description

`general-reducer` provides utilities to generate universal reducer with corresponding actions.

# Installation

As any other npm package `general-reducer` can be added to your project by following command:

```bash
npm i -S general-reducer
```

# API

## Universal reducer

`general-reducer` package provides general purpose reducer to perform most common operations on store. You just need to configure your store with it.

 * with react hook:

    ```js
    import React, { useReducer } from 'react';
    import { reducer } from 'general-reducer';

    const Component = () => {
        const [ value, dispatch ] = useReducer(reducer);

        ...
    }
    ```

 * with [redux](https://redux.js.org/):

    ```js
    import { createStore } from 'redux'
    import { reducer } from 'general-reducer';

    const store = createStore(reducer);
    ```

 * with [react-easy-flux](https://www.npmjs.com/package/react-easy-flux):

    ```js
    import { createStorage } from 'react-easy-flux';
    import { reducer } from 'general-reducer';

    const {
        Provider,
        useStorage,
        useActions
    } = createStorage(reducer);
    ```

> Since `general-reducer` uses [immutable-object-update](https://www.npmjs.com/package/immutable-object-update) under the hood, it performs immutable state update and returns frozen object.

## Built-in actions

`general-reducer` exposes `ACTIONS` map object with actions for most common operations with state:

* [insert(path, value)](src/actions/insert/README.md)
* [insertAll(path, values)](src/actions/insertAll/README.md)
* [pop(path, n)](src/actions/pop/README.md)
* [push(path, value)](src/actions/push/README.md)
* [pushAll(path, values)](src/actions/pushAll/README.md)
* [remove(path, n)](src/actions/remove/README.md)
* [set(path, value)](src/actions/set/README.md)
* [shift(path, n)](src/actions/shift/README.md)
* [unshift(path, value)](src/actions/unshift/README.md)
* [unshiftAll(path, values)](src/actions/unshiftAll/README.md)

All actions consumes at least 1 argument - `path` to updated element, it might be an array of items or dot-separated string. When action dispatched reducer will apply corresponding operation from [immutable-state-update](https://andres-kovalev.github.io/immutable-object-update/#api) package:

```js
import { reducer, ACTIONS } from 'general-reducer';

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

## Custom actions

It is possible to add custom actions to perform some complex updates. To so `createGeneralReducer()` function is exposed. It consumes map object with custom action update functions. Each update function will consume part of a state as an argument and should return updated value.

```js
const {
    reducer,
    ACTIONS
} = createGeneralReducer({
    selectAll: items => items.map(
        item => ({ ...item, selected: true })
    ),
    unselectAll: items => items.map(
        item => ({ ...item, selected: false })
    ),
    removeSelected: items => items.filter(
        ({ selected }) => !selected
    )
});
```

Returned actions will consume path to state piece to be updated.

```js
const state = {
    items: [
        { selected: true, text: 'Steal pants' },
        { selected: false, text: '?????' },
        { selected: false, text: 'Profit!' }
    ]
};

const updated = reducer(state, ACTIONS.removeSelected('items'));

/*
{
    items: [
        { selected: false, text: '?????' },
        { selected: false, text: 'Profit!' }
    ]
};
*/
```

If you need any additional arguments in your update function just pass those into action creator after path:

```js
const {
    reducer,
    ACTIONS
} = createGeneralReducer({
    add: (value, diff) => value + diff
});

const state = {
    a: 10
};

const updated = reducer(state, ACTIONS.add('a', 5));

/*
{
    a: 15
}
*/
```

