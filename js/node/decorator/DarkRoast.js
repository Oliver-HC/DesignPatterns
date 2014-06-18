require('./Beverage');

DarkRoast = function() {
    Beverage.apply(this);
    this.description = "Dark Roast Coffee";
}
DarkRoast.prototype = new Beverage();
DarkRoast.prototype.cost = function() {
    return .99;
}