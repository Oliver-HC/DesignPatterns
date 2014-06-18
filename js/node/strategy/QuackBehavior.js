QuackBehavior = function() {}
QuackBehavior.prototype.quack = function() {
    throw new Error("This method must be overwritten!\n");
}

Quack = function() {
    QuackBehavior.apply(this);
}
Quack.prototype = new QuackBehavior();
Quack.prototype.quack = function() {
    console.log("Quack! Quack!");
}

MuteQuack = function() {
    QuackBehavior.apply(this);
}
MuteQuack.prototype = new QuackBehavior();
MuteQuack.prototype.quack = function() {
    console.log("... ...");
}


Squeak = function() {
    QuackBehavior.apply(this);
}
Squeak.prototype = new QuackBehavior();
Squeak.prototype.quack = function() {
    console.log("Squack! Squack!");
}