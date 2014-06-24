require('./Pepperoni');

SlicedPepperoni = function() {
    Veggies.apply(this);
}
SlicedPepperoni.prototype = new Veggies();
SlicedPepperoni.prototype.toString = function() {
    return "Sliced Pepperoni";
}