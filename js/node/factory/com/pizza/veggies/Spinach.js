require('./Veggies');

Spinach = function() {
    Veggies.apply(this);
}
Spinach.prototype = new Veggies();
Spinach.prototype.toString = function() {
    return "Spinach";
}