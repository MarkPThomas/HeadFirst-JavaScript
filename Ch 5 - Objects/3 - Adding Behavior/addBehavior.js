/**
 * Created by Mark on 12/10/2016.
 */
var fiat =
    {
        make: "Fiat",
        model: "500",
        year: 1957,
        color: "Medium Blue",
        passengers: 2,
        convertible: false,
        mileage: 88000,
        started: false,
        fuel: 0,
        start: function()
            {
                if(this.fuel > 0)
                {
                    this.started = true;
                }
                else
                {
                 alert("The car is on empty, fill up before starting!");
                }
            },
        stop: function() {this.started = false},
        drive: function()
            {
                if (this.started)
                {
                    if(this.fuel > 0)
                    {
                        alert(this.make + " " + this.model + " goes zoom zoom!");
                        this.fuel -= 1;
                    } else {
                        alert("Uh oh, out of fuel.");
                        this.stop();
                    }
                }
                else
                {
                    alert("You need to start the engine first.");
                }
            },
        addFuel: function(amount)
        {
            this.fuel += amount;
        }
    };