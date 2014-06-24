require('./Veggies');

Mushroom = function() {
    Veggies.apply(this);
}
Mushroom.prototype = new Veggies();
Mushroom.prototype.toString = function() {
    return "Mushrooms";
}