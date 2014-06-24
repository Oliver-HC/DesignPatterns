require('./Veggies');

Onion = function() {
    Veggies.apply(this);
}
Onion.prototype = new Veggies();
Onion.prototype.toString = function() {
    return "Onion";
}