require('./Dough');

ThinCrustDough = function() {
    Dough.apply(this);
}
ThinCrustDough.prototype = new Dough();
ThinCrustDough.prototype.toString = function() {
    return "Thin Crust Dough";
}