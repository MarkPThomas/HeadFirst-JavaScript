/**
 * Created by Mark on 12/10/2016.
 */
function prequal(car)
{
    if (car.mileage > 10000)
    {
        return false;
    }
    else if (car.year > 1960)
    {
        return false;
    }
    return true;
}

function assessPrequal(car)
{
    var worthALook = prequal(car);

    if (worthALook)
    {
        console.log("You gotta check out this " + car.make + " " + car.model);
    }
    else
    {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}

assessPrequal(taxi);
assessPrequal(cadi);
assessPrequal(fiat);
assessPrequal(chevy);

