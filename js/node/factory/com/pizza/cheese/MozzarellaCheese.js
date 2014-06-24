require('./Cheese');

MozzarellaCheese = function() {
    Cheese.apply(this);
}
MozzarellaCheese.prototype = new Cheese
MozzarellaCheese.prototype.toString = function() {
    return "Shredded Mozzarella";
}