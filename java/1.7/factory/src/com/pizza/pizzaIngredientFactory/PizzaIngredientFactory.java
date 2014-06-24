package com.pizza.pizzaIngredientFactory;

import com.pizza.cheese.Cheese;
import com.pizza.clams.Clams;
import com.pizza.dough.Dough;
import com.pizza.pepperoni.Pepperoni;
import com.pizza.sauce.Sauce;
import com.pizza.veggies.Veggies;

public interface PizzaIngredientFactory {
 
	public Dough createDough();
	public Sauce createSauce();
	public Cheese createCheese();
	public Veggies[] createVeggies();
	public Pepperoni createPepperoni();
	public Clams createClam();
 
}
