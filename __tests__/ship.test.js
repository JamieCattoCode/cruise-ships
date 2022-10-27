const Ship = require('../src/ship');
const Port = require('../src/port');

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

    it('initialises startingPort as an object', () => 
    {
        bristol = new Port("Bristol");
        titanic = new Ship(bristol);
        expect(titanic.currentPort).toBeInstanceOf(Object);
        expect(titanic.currentPort.name).toBe("Bristol");
    })

    it('does not have a previous port', () => 
    {
        titanic = new Ship;
        expect(titanic.previous).toBeFalsy();
    })
})

describe('setSail', () => 
{
    it('changes previousPort to the currentPort', () =>
    {
        bristol = new Port("Bristol");
        titanic = new Ship(bristol);
        titanic.setSail();
        expect(titanic.previousPort).toBe(bristol);
    })

    it('removes value for currentPort property', () => 
    {
        bristol = new Port("Bristol");
        titanic = new Ship(bristol);
        titanic.setSail();
        expect(titanic.currentPort).toBeFalsy();
    })
    
})

describe('dock', () =>
{
    it('sets Ship\'s port property to new port', () =>
    {
        bristol = new Port("Bristol");
        galicia = new Port("Galicia")
        titanic = new Ship(bristol);
        titanic.dock(galicia);
        expect(titanic.currentPort.name).toBe("Galicia");
    })
})