require('./Pizza');

ClamPizza = function(ingredientFactory) {
    Pizza.apply(this);
    this.ingredientFactory = ingredientFactory;
}
ClamPizza.prototype = new Pizza();
ClamPizza.prototype.prepare = function() {
    console.log("Prepareing " + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
}