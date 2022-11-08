const Port = require('../src/port');

describe('constructor', () =>
{
    beforeEach(() =>
    {
        bristol = new Port('Bristol');
    })

    it('returns an object', () =>
    {
        expect(bristol).toBeInstanceOf(Object);
    })

    it('initialises name property as string argument', () =>
    {
        expect(bristol.name).toBe('Bristol');
    })
})

describe('addShip', () => 
{
    beforeEach(() =>
    {
        malaga = new Port("Malaga");
        titanic = jest.fn();
    })


    it('adds a ship to the ships property', () =>
    {
        malaga.addShip(titanic);
        expect(malaga.ships).toStrictEqual([titanic]);
    })
})

describe('removeShip', () =>
{
    beforeEach(() =>
    {
        malaga = new Port("Malaga");
        titanic = jest.fn();
    })

    it('removes a ship from the ships property', () =>
    {
        malaga.addShip(titanic);
        expect(malaga.ships).toStrictEqual([titanic]);
        malaga.removeShip(titanic);
        expect(malaga.ships).toStrictEqual([]);
    })
})