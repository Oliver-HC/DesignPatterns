require('./Cheese');

ParmesanCheese = function() {
    Cheese.apply(this);
}
ParmesanCheese.prototype = new Cheese
ParmesanCheese.prototyep.toString = function() {
    return "Shredded Parmesan";
}