require('./Cheese');

ReggianoCheese = function() {
    Cheese.apply(this);
}
ReggianoCheese.prototype = new Cheese
ReggianoCheese.prototype.toString = function() {
    return "Reggiano Cheese";
}