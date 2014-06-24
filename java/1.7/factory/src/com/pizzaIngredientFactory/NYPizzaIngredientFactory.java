package com.pizzaIngredientFactory;

import com.cheese.Cheese;
import com.cheese.ReggianoCheese;
import com.clams.Clams;
import com.clams.FreshClams;
import com.dough.Dough;
import com.dough.ThinCrustDough;
import com.pepperoni.Pepperoni;
import com.pepperoni.SlicedPepperoni;
import com.sauce.MarinaraSauce;
import com.sauce.Sauce;
import com.veggies.Garlic;
import com.veggies.Mushroom;
import com.veggies.Onion;
import com.veggies.RedPepper;
import com.veggies.Veggies;

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
