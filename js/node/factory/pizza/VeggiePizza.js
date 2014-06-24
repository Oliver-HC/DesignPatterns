require('./Pizza');

VeggiePizza = function(ingredientFactory) {
    Pizza.apply(this);
    this.ingredientFactory = ingredientFactory;
}
VeggiePizza.prototype = new Pizza();
VeggiePizza.prototype.prepare = function() {
    console.log("Prepareing " + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
}