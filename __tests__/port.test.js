const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe('constructor', () =>
{
    it('returns an object', () =>
    {
        expect(new Port("Bristol")).toBeInstanceOf(Object);
    })

    it('initialises name property as string argument', () =>
    {
        bristol = new Port("Bristol");
        expect(bristol.name).toBe("Bristol");
    })
})

describe('addShip', () => 
{
    it('adds a ship to the ships property', () =>
    {
        itinerary1 = new Itinerary;
        bristol = new Port("Bristol");
        titanic = new Ship(itinerary1);
        bristol.addShip(titanic);
        expect(bristol.ships).toStrictEqual([titanic]);
    })
})

describe('removeShip', () =>
{
    it('removes a ship from the ships property', () =>
    {
        itinerary1 = new Itinerary;
        bristol = new Port("Bristol");
        titanic = new Ship(itinerary1);
        bristol.addShip(titanic);
        expect(bristol.ships).toStrictEqual([titanic]);
        bristol.removeShip(titanic);
        expect(bristol.ships).toStrictEqual([]);
    })
})