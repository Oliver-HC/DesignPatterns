require('./Dough');

ThickCrustDough = function() {
    Dough.apply(this);
}
ThickCrustDough.prototype = new Dough();
ThickCrustDough.prototype.toString = function() {
    return "ThickCrust style extra thick crust dough";
}