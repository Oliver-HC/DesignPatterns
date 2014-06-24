require('./Beverage');

Decaf = function() {
    Beverage.apply(this);
    this.description = "Decaf Coffee";
}
Decaf.prototype = new Beverage();
Decaf.prototype.cost = function() {
    return 1.05;
}