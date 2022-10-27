const Port = require('../src/port');

class Itinerary
{
    constructor()
    {
        const bristol = new Port("Bristol");
        const galicia = new Port("Galicia");
        this.ports = [bristol, galicia];
    }
}

module.exports = Itinerary;