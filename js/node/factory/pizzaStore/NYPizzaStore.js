require('./PizzaStore');

require('../pizzaIngredientFactory/NYPizzaIngredientFactory');

require('../pizza/CheesePizza');
require('../pizza/VeggiePizza');
require('../pizza/ClamPizza');
require('../pizza/PepperoniPizza');

NYPizzaStore = function() {
    PizzaStore.apply(this);
}
NYPizzaStore.prototype = new PizzaStore();
NYPizzaStore.prototype.createPizza = function(item) {
    var pizza = null;
    var ingredientFactory = new NYPizzaIngredientFactory();

    if (item === "cheese") {
        pizza = new CheesePizza(ingredientFactory);
        pizza.setName("New York Style Cheese Pizza");
    } else if (item === "veggie") {
        pizza = new VeggiePizza(ingredientFactory);
        pizza.setName("New York Style Veggie Pizza");
    } else if (item === "clam") {
        pizza = new ClamPizza(ingredientFactory);
        pizza.setName("New York Style Clam Pizza");
    } else if (item === "pepperoni") {
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.setName("New York Style Pepperoni Pizza");
    }
    return pizza;
}