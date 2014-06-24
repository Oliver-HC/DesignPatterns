require('./Beverage');

HouseBlend = function() {
    Beverage.apply(this);
    this.description = "House Blend Coffee";
}
HouseBlend.prototype = new Beverage();
HouseBlend.prototype.cost = function() {
    return .89;
}