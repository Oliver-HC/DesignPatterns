package com.pizzaIngredientFactory;

import com.cheese.Cheese;
import com.cheese.MozzarellaCheese;
import com.clams.Clams;
import com.clams.FrozenClams;
import com.dough.Dough;
import com.dough.ThickCrustDough;
import com.pepperoni.Pepperoni;
import com.pepperoni.SlicedPepperoni;
import com.sauce.PlumTomatoSauce;
import com.sauce.Sauce;
import com.veggies.BlackOlives;
import com.veggies.Eggplant;
import com.veggies.Spinach;
import com.veggies.Veggies;

public class ChicagoPizzaIngredientFactory 
	implements PizzaIngredientFactory 
{

	public Dough createDough() {
		return new ThickCrustDough();
	}

	public Sauce createSauce() {
		return new PlumTomatoSauce();
	}

	public Cheese createCheese() {
		return new MozzarellaCheese();
	}

	public Veggies[] createVeggies() {
		Veggies veggies[] = { new BlackOlives(), 
		                      new Spinach(), 
		                      new Eggplant() };
		return veggies;
	}

	public Pepperoni createPepperoni() {
		return new SlicedPepperoni();
	}

	public Clams createClam() {
		return new FrozenClams();
	}
}
