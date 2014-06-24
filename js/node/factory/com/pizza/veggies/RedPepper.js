require('./Veggies');

RedPepper = function() {
    Veggies.apply(this);
}
RedPepper.prototype = new Veggies();
RedPepper.prototype.toString = function() {
    return "Red Pepper";
}