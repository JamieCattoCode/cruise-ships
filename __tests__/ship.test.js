const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => 
{
    beforeEach(() =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
    })
    
    it('returns an object', () => 
    {
        expect(titanic).toBeInstanceOf(Object);
    })

    it('initialises a passengers property as an empty array', () => 
    {
        expect(titanic.passengers).toStrictEqual([]);
    })

    it('has an itinerary of ports as an array', () =>
    {
        for (let i = 0; i < titanic.itinerary.length; i++)
        {
            expect(titanic.itinerary[i]).toBeInstanceOf(Object);
        }
    })

    it('initialises startingPort as an object', () => 
    {
        expect(titanic.currentPort).toBeInstanceOf(Object);
        expect(titanic.currentPort.name).toBe("Bristol");
    })

    it('does not have a previous port', () => 
    {
        expect(titanic.previous).toBeFalsy();
    })

    it('gets added to port on instantiation', () =>
    {
        expect(titanic.currentPort.ships).toContain(titanic);
    })
})

describe('setSail', () => 
{
    beforeEach(() =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        titanic.setSail();
    })

    it('changes previousPort to the currentPort', () =>
    {
        expect(titanic.previousPort).toBe(titanic.itinerary[0]);
    })

    it('removes value for currentPort property', () => 
    {
        expect(titanic.currentPort).toBeFalsy();
    })

    it('cannot sail further than its itinerary', () => 
    {
        titanic.dock();
        expect(() => titanic.setSail()).toThrowError('End of itinerary reached.')
    })

    it('previous currentPort does not contain the ship', () =>
    {
        titanic.dock();
        expect(titanic.itinerary[0].ships).not.toContain(titanic);
    })

})

describe('dock', () =>
{
    beforeEach(() =>
    {
        itinerary1 = new Itinerary;
        titanic = new Ship(itinerary1);
        titanic.setSail();
        titanic.dock();
    })
    
    it('cannot dock if already docked', () => 
    {
        expect(() => titanic.dock()).toThrowError('Can only dock after setting sail.')
    })

    it('sets Ship\'s port property to next port', () =>
    {
        expect(titanic.currentPort.name).toBe("Galicia");
        expect(titanic.currentPort.ships).toContain(titanic);
    })
})