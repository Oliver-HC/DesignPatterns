require('./PizzaIngredientFactory');

require('../dough/ThinCrustDough');
require('../sauce/MarinaraSauce');
require('../cheese/ReggianoCheese');
require('../veggies/Garlic');
require('../veggies/Onion');
require('../veggies/Mushroom');
require('../veggies/RedPepper');
require('../pepperoni/SlicedPepperoni');
require('../clams/FreshClams');

NYPizzaIngredientFactory = function() {
    PizzaIngredientFactory.apply(this);
}
NYPizzaIngredientFactory.prototype = new PizzaIngredientFactory();
NYPizzaIngredientFactory.prototype.createDough = function() {
    return new ThinCrustDough();
}
NYPizzaIngredientFactory.prototype.createSauce = function() {
    return new MarinaraSauce();
}
NYPizzaIngredientFactory.prototype.createCheese = function() {
    return new ReggianoCheese();
}
NYPizzaIngredientFactory.prototype.createVeggies = function() {
    this.veggies = [];
    this.veggies.push(new Garlic());
    this.veggies.push(new Onion());
    this.veggies.push(new Mushroom());
    this.veggies.push(new RedPepper());
    return this.veggies;
}
NYPizzaIngredientFactory.prototype.createPepperoni = function() {
    return new SlicedPepperoni();
}
NYPizzaIngredientFactory.prototype.createClam = function() {
    return new FreshClams();
}