var FlyBehavior = function() {}
FlyBehavior.prototype.fly = function() {
    throw new Error("This method must be overwritten!\n");
}


var FlyWithWings = function() {
    FlyBehavior.apply(this);
}
FlyWithWings.prototype = new FlyBehavior();
FlyWithWings.prototype.fly = function() {
    console.log("I believe I can fly");
}

var FlyNoWay = function() {
    FlyBehavior.apply(this);
}
FlyNoWay.prototype = new FlyBehavior();
FlyNoWay.prototype.fly = function() {
    console.log("I can't fly");
}

var FlyRocketPowered = function() {
    FlyBehavior.apply(this);
}
FlyRocketPowered.prototype = new FlyBehavior();
FlyRocketPowered.prototype.fly = function() {
    console.log("I'm flying with a rocket");
}

var QuackBehavior = function() {}
QuackBehavior.prototype.quack = function() {
    throw new Error("This method must be overwritten!\n");
}

var Quack = function() {
    QuackBehavior.apply(this);
}
Quack.prototype = new QuackBehavior();
Quack.prototype.quack = function() {
    console.log("Quack! Quack!");
}

var MuteQuack = function() {
    QuackBehavior.apply(this);
}
MuteQuack.prototype = new QuackBehavior();
MuteQuack.prototype.quack = function() {
    console.log("... ...");
}


var Squeak = function() {
    QuackBehavior.apply(this);
}
Squeak.prototype = new QuackBehavior();
Squeak.prototype.quack = function() {
    console.log("Squack! Squack!");
}

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

var mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();

var modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();