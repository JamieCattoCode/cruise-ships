const Ship = require('../src/index');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    })

    it('initialises a passengers property as an empty array', () => {
        titanic = new Ship;
        expect(titanic.passengers).toStrictEqual([]);
    })

    it('initialises startingPort property as a string', () => {
        titanic = new Ship("Bristol");
        expect(titanic.startingPort.toLowerCase()).toBe("bristol");
    })
})