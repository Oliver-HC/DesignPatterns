require('./PizzaIngredientFactory');

require('../dough/ThickCrustDough');
require('../sauce/PlumTomatoSauce');
require('../cheese/MozzarellaCheese');
require('../veggies/BlackOlives');
require('../veggies/Spinach');
require('../veggies/Eggplant');
require('../pepperoni/SlicedPepperoni');
require('../clams/FrozenClams');

ChicagoPizzaIngredientFactory = function() {
    PizzaIngredientFactory.apply(this);
}
ChicagoPizzaIngredientFactory.prototype = new PizzaIngredientFactory();
ChicagoPizzaIngredientFactory.prototype.createDough = function() {
    return new ThickCrustDough();
}
ChicagoPizzaIngredientFactory.prototype.createSauce = function() {
    return new PlumTomatoSauce();
}
ChicagoPizzaIngredientFactory.prototype.createCheese = function() {
    return new MozzarellaCheese();
}
ChicagoPizzaIngredientFactory.prototype.createVeggies = function() {
    this.veggies = [];
    this.veggies.push(new BlackOlives());
    this.veggies.push(new Spinach());
    this.veggies.push(new Eggplant());
    return this.veggies;
}
ChicagoPizzaIngredientFactory.prototype.createPepperoni = function() {
    return new SlicedPepperoni();
}
ChicagoPizzaIngredientFactory.prototype.createClam = function() {
    return new FrozenClams();
}