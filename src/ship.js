class Ship
{
    constructor(startingPort)
    {
        this.passengers = [];
        this.startingPort = startingPort;
    }

    setSail()
    {
        this.startingPort = null;
    }
}

module.exports = Ship;