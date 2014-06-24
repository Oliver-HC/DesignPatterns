package com.pizza.pizzaStore;

import com.pizza.pizza.CheesePizza;
import com.pizza.pizza.ClamPizza;
import com.pizza.pizza.PepperoniPizza;
import com.pizza.pizza.Pizza;
import com.pizza.pizza.VeggiePizza;
import com.pizza.pizzaIngredientFactory.NYPizzaIngredientFactory;
import com.pizza.pizzaIngredientFactory.PizzaIngredientFactory;

public class NYPizzaStore extends PizzaStore {
 
	protected Pizza createPizza(String item) {
		Pizza pizza = null;
		PizzaIngredientFactory ingredientFactory = 
			new NYPizzaIngredientFactory();
 
		if (item.equals("cheese")) {
  
			pizza = new CheesePizza(ingredientFactory);
			pizza.setName("New York Style Cheese Pizza");
  
		} else if (item.equals("veggie")) {
 
			pizza = new VeggiePizza(ingredientFactory);
			pizza.setName("New York Style Veggie Pizza");
 
		} else if (item.equals("clam")) {
 
			pizza = new ClamPizza(ingredientFactory);
			pizza.setName("New York Style Clam Pizza");
 
		} else if (item.equals("pepperoni")) {

			pizza = new PepperoniPizza(ingredientFactory);
			pizza.setName("New York Style Pepperoni Pizza");
 
		} 
		return pizza;
	}
}
