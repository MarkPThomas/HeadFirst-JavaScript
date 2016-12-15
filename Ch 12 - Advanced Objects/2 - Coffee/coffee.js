/**
 * Created by Mark on 12/15/2016.
 */
function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function(){
      switch (this.ounces){
          case 8:
              return "small";
          case 12:
              return "medium";
          case 16:
              return "large"
          default:
              return "Invalid size!"
      }
    };
    this.toString = function(){
      return "You've ordered a " + this.getSize() + " " + this.roast + " coffee."
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());