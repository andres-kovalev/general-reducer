const { createGeneralReducer } = require('..');

const defaultItems = [ 'set', 'remove', 'push', 'pop', 'shift', 'unshift', 'insert' ];
const shallowClone = object => ({ ...object });

describe('createGeneralReducer', () => {
    describe('by default', () => {
        let generalReducerStuff;

        beforeEach(() => {
            generalReducerStuff = createGeneralReducer();
        });

        it('should create default action types', () => {
            const { TYPES } = generalReducerStuff;

            defaultItems.forEach(
                item => expect(TYPES).to.have.property(item)
            );
        });

        it('should create default actions', () => {
            const { ACTIONS } = generalReducerStuff;

            defaultItems.forEach(
                item => expect(ACTIONS).to.have.property(item)
            );
        });

        it('should create general reducer', () => {
            expect(generalReducerStuff).to.have.property('reducer');
        });
    });

    it('should provide ability to create custom actions', () => {
        const sum = (acc, item) => acc + item;
        const state = { a: [ 1, 2, 3 ] };

        const { ACTIONS, reducer } = createGeneralReducer({
            sum: array => array.reduce(sum, 0)
        });
        const updated = reducer(state, ACTIONS.sum('a'));

        expect(updated.a).to.be.equal(6);
    });

    it('should provide ability to pass additional arguments to custom action', () => {
        const state = { a: [ 1, 2, 3 ] };

        const { ACTIONS, reducer } = createGeneralReducer({
            join: (items, delimiter) => items.join(delimiter)
        });
        const updated = reducer(state, ACTIONS.join('a', '==='));

        expect(updated.a).to.be.equal('1===2===3');
    });
});

describe('actions', () => {
    let generalReducerStuff;
    let reducer;
    let ACTIONS;

    beforeEach(() => {
        generalReducerStuff = createGeneralReducer();

        /* eslint-disable prefer-destructuring */
        reducer = generalReducerStuff.reducer;
        ACTIONS = generalReducerStuff.ACTIONS;
        /* eslint-enable prefer-destructuring */
    });

    describe('set', () => {
        it('should set value', () => {
            const state = {};

            const updated = reducer(state, ACTIONS.set('a.b', 1));

            expect(updated).to.have.property('a');
            expect(updated.a.b).to.be.equal(1);
        });
    });

    describe('remove', () => {
        it('should remove item from object', () => {
            const state = { a: { b: 1 } };

            const updated = reducer(state, ACTIONS.remove('a.b'));

            expect(updated.a).to.not.have.property('b');
        });

        it('should remove item from array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.remove('a.1'));

            expect(updated.a).to.be.eql([ 1, 3 ]);
        });

        it('should be able to remove several items from array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.remove('a.1', 2));

            expect(updated.a).to.be.eql([ 1 ]);
        });
    });

    describe('push', () => {
        it('should add an item to the end of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.push('a', 2));

            expect(updated.a).to.be.eql([ 1, 2 ]);
        });

        it('should be able to add several items to the end of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.push('a', 2, 3));

            expect(updated.a).to.be.eql([ 1, 2, 3 ]);
        });
    });

    describe('pushAll', () => {
        it('should add items to the end of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.pushAll('a', [ 2, 3 ]));

            expect(updated.a).to.be.eql([ 1, 2, 3 ]);
        });
    });

    describe('pop', () => {
        it('should remove an item from the end of array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.pop('a'));

            expect(updated.a).to.be.eql([ 1, 2 ]);
        });

        it('should be able to remove several items from the end of array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.pop('a', 2));

            expect(updated.a).to.be.eql([ 1 ]);
        });
    });

    describe('shift', () => {
        it('should remove item from the start of array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.shift('a'));

            expect(updated.a).to.be.eql([ 2, 3 ]);
        });

        it('should be able to remove several items from the beginning of array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.shift('a', 2));

            expect(updated.a).to.be.eql([ 3 ]);
        });
    });

    describe('unshift', () => {
        it('should add an item to the beginning of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.unshift('a', 2));

            expect(updated.a).to.be.eql([ 2, 1 ]);
        });

        it('should be able to add several items to the beginning of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.unshift('a', 2, 3));

            expect(updated.a).to.be.eql([ 2, 3, 1 ]);
        });
    });

    describe('unshiftAll', () => {
        it('should add items to the beginning of array', () => {
            const state = { a: [ 1 ] };

            const updated = reducer(state, ACTIONS.unshiftAll('a', [ 2, 3 ]));

            expect(updated.a).to.be.eql([ 2, 3, 1 ]);
        });
    });

    describe('insert', () => {
        it('should insert an item into array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.insert('a.1', 4));

            expect(updated.a).to.be.eql([ 1, 4, 2, 3 ]);
        });

        it('should be able to insert several items into array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.insert('a.1', 4, 5));

            expect(updated.a).to.be.eql([ 1, 4, 5, 2, 3 ]);
        });
    });

    describe('insertAll', () => {
        it('should insert items into array', () => {
            const state = { a: [ 1, 2, 3 ] };

            const updated = reducer(state, ACTIONS.insertAll('a.1', [ 4, 5 ]));

            expect(updated.a).to.be.eql([ 1, 4, 5, 2, 3 ]);
        });
    });

    describe('all', () => {
        it('should combine several actions', () => {
            const state = {
                a: {
                    a1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
                }
            };

            const trim = (path, n) => ACTIONS.all(
                ACTIONS.shift(path, n),
                ACTIONS.pop(path, n)
            );
            const updated = reducer(state, trim('a.a1', 2));

            expect(updated.a.a1).to.be.eql([ 3, 4, 5, 6, 7 ]);
        });
    });
});

describe('reducer', () => {
    it('should return frozen result', () => {
        const state = { a: 1, b: 2 };

        const { ACTIONS, reducer } = createGeneralReducer({
            shallowClone
        });
        const updated = reducer(state, ACTIONS.shallowClone());

        expect(updated.a).to.be.equal(1);

        updated.a = 2;

        expect(updated.a).to.be.equal(1);
    });
});
