require('./pizzaStore/NYPizzaStore');
require('./pizzaStore/ChicagoPizzaStore');

var nyStore = new NYPizzaStore();
var chicagoStore = new ChicagoPizzaStore();

var pizza = nyStore.orderPizza("cheese");
console.log("Ethan ordered a " + pizza);

pizza = chicagoStore.orderPizza("cheese");
console.log("Joel ordered a " + pizza);

var pizza = nyStore.orderPizza("clam");
console.log("Ethan ordered a " + pizza);

pizza = chicagoStore.orderPizza("clam");
console.log("Joel ordered a " + pizza);

var pizza = nyStore.orderPizza("pepperoni");
console.log("Ethan ordered a " + pizza);

pizza = chicagoStore.orderPizza("pepperoni");
console.log("Joel ordered a " + pizza);

var pizza = nyStore.orderPizza("veggie");
console.log("Ethan ordered a " + pizza);

pizza = chicagoStore.orderPizza("veggie");
console.log("Joel ordered a " + pizza);