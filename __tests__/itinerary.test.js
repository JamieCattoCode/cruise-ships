const Itinerary = require('../src/itinerary');

describe('constructor', () => 
{
    it('creates an instance of an object', () => 
    {
        expect(new Itinerary).toBeInstanceOf(Object);
    })

    it('contains a ports property as an array', () => 
    {
        itinerary25 = new Itinerary;
        expect(itinerary25.ports).toBeInstanceOf(Array);
    })
})