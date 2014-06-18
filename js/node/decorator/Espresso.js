require('./Beverage');

Espresso = function() {
    Beverage.apply(this);
    this.description = "Espresso";
}
Espresso.prototype = new Beverage();
Espresso.prototype.cost = function() {
    return 1.99;
}
