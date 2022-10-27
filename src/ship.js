class Ship
{
    constructor(startingPort)
    {
        this.passengers = [];
        this.currentPort = startingPort;
        this.previousPort = null;
    }

    setSail()
    {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock(newPort)
    {
        this.currentPort = newPort;
    }
}

module.exports = Ship;