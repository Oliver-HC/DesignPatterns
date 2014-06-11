var FlyWithWings = require('./FlyBehavior').FlyWithWings;
var FlyNoWay = require('./FlyBehavior').FlyNoWay;

var Quack = require('./QuackBehavior').Quack;

var Duck = function() {
    this.flyBehavior = null;
    this.quackBehavior = null;
}
Duck.prototype.display = function() {
    throw new Error("This method must be overwritten!\n");
}
Duck.prototype.performFly = function() {
    this.flyBehavior.fly();
}
Duck.prototype.performQuack = function() {
    this.quackBehavior.quack();
}
Duck.prototype.setFlyBehavior = function(fb) {
    this.flyBehavior = fb;
}
Duck.prototype.setQuackBehavior = function(qb) {
    this.quackBehavior = qb;
}
Duck.prototype.swim = function() {
    console.log("All ducks float, even decoys!\n");
}

var MallardDuck = function() {
    Duck.apply(this);
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
}
MallardDuck.prototype = new Duck();
MallardDuck.prototype.display = function() {
    console.log("I'm a real Mallard duck\n");
}

var ModelDuck = function() {
    Duck.apply(this);
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
}
ModelDuck.prototype = new Duck();
ModelDuck.prototype.display = function() {
    console.log("I'm a model duck\n");
}