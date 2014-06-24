require('./Veggies');

BlackOlives = function() {
    Veggies.apply(this);
}
BlackOlives.prototype = new Veggies();
BlackOlives.prototype.toString = function() {
    return "Black Olives";
}