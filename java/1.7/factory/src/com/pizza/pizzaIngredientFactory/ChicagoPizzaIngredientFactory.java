package com.pizza.pizzaIngredientFactory;

import com.pizza.cheese.Cheese;
import com.pizza.cheese.MozzarellaCheese;
import com.pizza.clams.Clams;
import com.pizza.clams.FrozenClams;
import com.pizza.dough.Dough;
import com.pizza.dough.ThickCrustDough;
import com.pizza.pepperoni.Pepperoni;
import com.pizza.pepperoni.SlicedPepperoni;
import com.pizza.sauce.PlumTomatoSauce;
import com.pizza.sauce.Sauce;
import com.pizza.veggies.BlackOlives;
import com.pizza.veggies.Eggplant;
import com.pizza.veggies.Spinach;
import com.pizza.veggies.Veggies;

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
