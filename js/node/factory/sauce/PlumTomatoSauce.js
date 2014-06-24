require('./Sauce');

PlumTomatoSauce = function() {
    Sauce.apply(this);
}
PlumTomatoSauce.prototype = new Sauce();
PlumTomatoSauce.prototype.toString = function() {
    return "Tomato sauce with plum tomatoes";
}