const Ship = require('../src/ship');

describe('constructor', () => 
{
    it('returns an object', () => 
    {
        expect(new Ship).toBeInstanceOf(Object);
    })

    it('initialises a passengers property as an empty array', () => 
    {
        titanic = new Ship;
        expect(titanic.passengers).toStrictEqual([]);
    })

    it('initialises startingPort property as a string passed through an argument', () => 
    {
        titanic = new Ship("Bristol");
        expect(titanic.startingPort).toBe("Bristol");
    })
})

describe('setSail', () => 
{
    it('removes value for startingPort property', () => 
    {
        titanic = new Ship("Bristol")
        titanic.setSail();
        expect(titanic.startingPort).toBeFalsy();
    })
})