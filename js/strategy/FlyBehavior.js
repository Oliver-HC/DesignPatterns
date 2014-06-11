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