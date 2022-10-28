const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

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
        itinerary1 = new Itinerary;
        bristol = new Port("Bristol");
        titanic = new Ship(itinerary1);
    })


    it('adds a ship to the ships property', () =>
    {
        bristol.addShip(titanic);
        expect(bristol.ships).toStrictEqual([titanic]);
    })
})

describe('removeShip', () =>
{
    beforeEach(() =>
    {
        itinerary1 = new Itinerary;
        bristol = new Port("Bristol");
        titanic = new Ship(itinerary1);
    })

    it('removes a ship from the ships property', () =>
    {
        bristol.addShip(titanic);
        expect(bristol.ships).toStrictEqual([titanic]);
        bristol.removeShip(titanic);
        expect(bristol.ships).toStrictEqual([]);
    })
})