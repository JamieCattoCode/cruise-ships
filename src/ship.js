class Ship
{
    constructor(startingPort)
    {
        this.passengers = [];
        this.currentPort = startingPort;
    }

    setSail()
    {
        this.currentPort = null;
    }

    dock(newPort)
    {
        this.currentPort = newPort;
    }
}

module.exports = Ship;