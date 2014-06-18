require('./CondimentDecorator');

Whip = function(beverage) {
    CondimentDecorator.apply(this);
    this.beverage = beverage;
}
Whip.prototype = new CondimentDecorator();
Whip.prototype.getDescription = function() {
    return this.beverage.getDescription() + ", Whip"
}
Whip.prototype.cost = function() {
    return .10 + this.beverage.cost();
}