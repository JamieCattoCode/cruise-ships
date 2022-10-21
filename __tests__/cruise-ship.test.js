const Ship = require('../src/index');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    })

    it('initialises a passengers property as an empty array', () => {
        titanic = new Ship;
        expect(titanic.passengers).toStrictEqual([]);
    })

    it('initialises startingPoint property as 0', () => {
        titanic = new Ship;
        expect(titanic.startingPoint).toBe(0);
    })
})