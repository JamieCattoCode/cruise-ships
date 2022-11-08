const Itinerary = require('../src/itinerary');

describe('constructor', () => 
{
    beforeEach(() => 
    {
        port1 = jest.fn();
        port2 = jest.fn();
        itinerary = new Itinerary([port1, port2])
    })
    it('creates an instance of an object', () => 
    {
        expect(itinerary).toBeInstanceOf(Object);
    })

    it('contains a ports property as an array', () => 
    {
        expect(itinerary.ports).toBeInstanceOf(Array);
    })
})