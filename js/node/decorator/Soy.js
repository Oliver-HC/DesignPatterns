require('./CondimentDecorator');

Soy = function(beverage) {
    CondimentDecorator.apply(this);
    this.beverage = beverage;
}
Soy.prototype = new CondimentDecorator();
Soy.prototype.getDescription = function() {
    return this.beverage.getDescription() + ", Soy"
}
Soy.prototype.cost = function() {
    return .15 + this.beverage.cost();
}