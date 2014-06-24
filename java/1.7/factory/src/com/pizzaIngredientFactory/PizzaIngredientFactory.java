package com.pizzaIngredientFactory;

import com.cheese.Cheese;
import com.clams.Clams;
import com.dough.Dough;
import com.pepperoni.Pepperoni;
import com.sauce.Sauce;
import com.veggies.Veggies;

public interface PizzaIngredientFactory {
 
	public Dough createDough();
	public Sauce createSauce();
	public Cheese createCheese();
	public Veggies[] createVeggies();
	public Pepperoni createPepperoni();
	public Clams createClam();
 
}
