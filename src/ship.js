const ITINERARY_END_MSG = "End of itinerary reached.";
const SETSAIL_NEEDED_MSG = "Can only dock after setting sail.";

class Ship
{
    constructor(itinerary)
    {
        this.itinerary = itinerary.ports;
        this.passengers = [];
        this.currentPort = this.itinerary[0];
        this.previousPort = null;
        this.__visits__ = 0;

        this.currentPort.addShip(this);
    }

    get itineraryExhausted()
    {
        if (this.__visits__ >= this.itinerary.length)
        {
            return true;
        }
        return false;
    }

    setSail()
    {
        this.__visits__ += 1;

        if (this.itineraryExhausted)
        {
            throw new Error(ITINERARY_END_MSG);
        }
        else
        {
            this.currentPort.removeShip(this);
            this.previousPort = this.currentPort;
            this.currentPort = null;
        }
    }

    dock()
    {
        if(this.currentPort !== null)
        {
            throw new Error(SETSAIL_NEEDED_MSG);
        }
        else
        {
            this.currentPort = this.itinerary[this.__visits__];
            this.currentPort.addShip(this);
        }
        
    }

}

module.exports = Ship;