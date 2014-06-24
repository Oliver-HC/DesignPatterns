require('./Pizza');

PepperoniPizza = function(ingredientFactory) {
    Pizza.apply(this);
    this.ingredientFactory = ingredientFactory;
}
PepperoniPizza.prototype = new Pizza();
PepperoniPizza.prototype.prepare = function() {
    console.log("Prepareing " + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
    this.pepperoni = this.ingredientFactory.createPepperoni();
}