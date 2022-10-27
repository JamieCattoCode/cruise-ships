const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => 
{
    it('returns an object', () => 
    {
        itinerary1 = new Itinerary;
        expect(new Ship(itinerary1)).toBeInstanceOf(Object);
    })

    it('initialises a passengers property as an empty array', () => 
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        expect(titanic.passengers).toStrictEqual([]);
    })

    it('has an itinerary of ports as an array', () =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        for (let i = 0; i < titanic.itinerary.length; i++)
        {
            expect(titanic.itinerary[i]).toBeInstanceOf(Object);
        }
    })

    it('initialises startingPort as an object', () => 
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        expect(titanic.currentPort).toBeInstanceOf(Object);
        expect(titanic.currentPort.name).toBe("Bristol");
    })

    it('does not have a previous port', () => 
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        expect(titanic.previous).toBeFalsy();
    })
})

describe('setSail', () => 
{
    it('changes previousPort to the currentPort', () =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        titanic.setSail();
        expect(titanic.previousPort).toBe(titanic.itinerary[0]);
    })

    it('removes value for currentPort property', () => 
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        titanic.setSail();
        expect(titanic.currentPort).toBeFalsy();
    })

})

describe('dock', () =>
{
    it('sets Ship\'s port property to next port', () =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        titanic.setSail();
        titanic.dock();
        expect(titanic.currentPort.name).toBe("Galicia");
    })
})