const Port = require('../src/port');

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