require('./Veggies');

Garlic = function() {
    Veggies.apply(this);
}
Garlic.prototype = new Veggies();
Garlic.prototype.toString = function() {
    return "Garlic";
}