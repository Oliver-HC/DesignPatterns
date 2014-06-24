PizzaStore = function() {}
PizzaStore.prototype.createPizza = function(item) {
    throw new Error("This method must be overwritten!\n");
}
PizzaStore.prototype.orderPizza = function(type) {
    var pizza = this.createPizza(type);
    console.log("--- Making a " + pizza + " ---");
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
}