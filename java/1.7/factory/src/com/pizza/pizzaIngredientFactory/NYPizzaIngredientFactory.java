package com.pizza.pizzaIngredientFactory;

import com.pizza.cheese.Cheese;
import com.pizza.cheese.ReggianoCheese;
import com.pizza.clams.Clams;
import com.pizza.clams.FreshClams;
import com.pizza.dough.Dough;
import com.pizza.dough.ThinCrustDough;
import com.pizza.pepperoni.Pepperoni;
import com.pizza.pepperoni.SlicedPepperoni;
import com.pizza.sauce.MarinaraSauce;
import com.pizza.sauce.Sauce;
import com.pizza.veggies.Garlic;
import com.pizza.veggies.Mushroom;
import com.pizza.veggies.Onion;
import com.pizza.veggies.RedPepper;
import com.pizza.veggies.Veggies;

public class NYPizzaIngredientFactory implements PizzaIngredientFactory {
 
	public Dough createDough() {
		return new ThinCrustDough();
	}
 
	public Sauce createSauce() {
		return new MarinaraSauce();
	}
 
	public Cheese createCheese() {
		return new ReggianoCheese();
	}
 
	public Veggies[] createVeggies() {
		Veggies veggies[] = { new Garlic(), new Onion(), new Mushroom(), new RedPepper() };
		return veggies;
	}
 
	public Pepperoni createPepperoni() {
		return new SlicedPepperoni();
	}

	public Clams createClam() {
		return new FreshClams();
	}
}
