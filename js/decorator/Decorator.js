var Beverage = function() {
    this.description = "Unknown Beverage";
}
Beverage.prototype.getDescription = function() {
    return this.description;
}
Beverage.prototype.cost = function() {
    throw new Error("This method must be overwritten!\n");
}

var Espresso = function() {
    Beverage.apply(this);
    this.description = "Espresso";
}
Espresso.prototype = new Beverage();
Espresso.prototype.cost = function() {
    return 1.99;
}

var HouseBlend = function() {
    Beverage.apply(this);
    this.description = "House Blend Coffee";
}
HouseBlend.prototype = new Beverage();
HouseBlend.prototype.cost = function() {
    return .89;
}

var DarkRoast = function() {
    Beverage.apply(this);
    this.description = "Dark Roast Coffee";
}
DarkRoast.prototype = new Beverage();
DarkRoast.prototype.cost = function() {
    return .99;
}

var Decaf = function() {
    Beverage.apply(this);
    this.description = "Decaf Coffee";
}
Decaf.prototype = new Beverage();
Decaf.prototype.cost = function() {
    return 1.05;
}

var CondimentDecorator = function() {
    Beverage.apply(this);
}
CondimentDecorator.prototype = new Beverage();

var Mocha = function(beverage) {
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

var Soy = function(beverage) {
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

var Whip = function(beverage) {
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

var beverage = new Espresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

var beverage2 = new DarkRoast();
var beverage2 = new Mocha(beverage2);
var beverage2 = new Mocha(beverage2);
var beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

var beverage3 = new HouseBlend();
var beverage3 = new Soy(beverage3);
var beverage3 = new Mocha(beverage3);
var beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());