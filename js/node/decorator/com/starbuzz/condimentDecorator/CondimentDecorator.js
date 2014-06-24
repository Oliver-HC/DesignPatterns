require('../beverage/Beverage');

CondimentDecorator = function() {
    Beverage.apply(this);
}
CondimentDecorator.prototype = new Beverage();