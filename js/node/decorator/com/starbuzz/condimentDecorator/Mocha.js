require('./CondimentDecorator');

Mocha = function(beverage) {
    CondimentDecorator.apply(this);
    this.beverage = beverage;
}
Mocha.prototype = new CondimentDecorator();
Mocha.prototype.getDescription = function() {
    return this.beverage.getDescription() + ", Mocha";
}
Mocha.prototype.cost = function() {
    return .20 + this.beverage.cost();
}
