require('./Veggies');

Eggplant = function() {
    Veggies.apply(this);
}
Eggplant.prototype = new Veggies();
Eggplant.prototype.toString = function() {
    return "Eggplant";
}