require('./Pizza');

CheesePizza = function(ingredientFactory) {
    Pizza.apply(this);
    this.ingredientFactory = ingredientFactory;
}
CheesePizza.prototype = new Pizza();
CheesePizza.prototype.prepare = function() {
    console.log("Prepareing " + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
}