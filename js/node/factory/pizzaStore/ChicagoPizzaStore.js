require('./PizzaStore');

require('../pizzaIngredientFactory/ChicagoPizzaIngredientFactory');

require('../pizza/CheesePizza');
require('../pizza/VeggiePizza');
require('../pizza/ClamPizza');
require('../pizza/PepperoniPizza');

ChicagoPizzaStore = function() {
    PizzaStore.apply(this);
}
ChicagoPizzaStore.prototype = new PizzaStore();
ChicagoPizzaStore.prototype.createPizza = function(item) {
    var pizza = null;
    var ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (item === "cheese") {
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName("Chicago Style Cheese Pizza");
    } else if (item === "veggie") {
        pizza = new VeggiePizza(ingredientFactory);
        pizza.setName("Chicago Style Veggie Pizza");
    } else if (item === "clam") {
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName("Chicago Style Clam Pizza");
    } else if (item === "pepperoni") {
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.setName("Chicago Style Pepperoni Pizza");
    }
    return pizza;
}