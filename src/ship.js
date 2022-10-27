class Ship
{
    constructor(itinerary)
    {
        this.itinerary = itinerary.ports;
        this.passengers = [];
        this.currentPort = this.itinerary[0];
        this.previousPort = null;
        this.__visits__ = 0;
    }

    setSail()
    {
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.__visits__ += 1;
    }

    dock()
    {
        if (this.currentPort === null)
        {
            this.currentPort = this.itinerary[this.__visits__];
        }
        else
        {
            throw new Error("Can only dock after setting sail.")
        }
    }
}

module.exports = Ship;