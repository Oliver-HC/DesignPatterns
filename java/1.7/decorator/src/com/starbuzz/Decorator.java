package com.starbuzz;

import com.starbuzz.beverage.Beverage;
import com.starbuzz.beverage.DarkRoast;
import com.starbuzz.beverage.Espresso;
import com.starbuzz.beverage.HouseBlend;
import com.starbuzz.condimentDecorator.Mocha;
import com.starbuzz.condimentDecorator.Soy;
import com.starbuzz.condimentDecorator.Whip;

public class Decorator {
 
	public static void main(String args[]) {
		Beverage beverage = new Espresso();
		System.out.println(beverage.getDescription() 
				+ " $" + beverage.cost());
 
		Beverage beverage2 = new DarkRoast();
		beverage2 = new Mocha(beverage2);
		beverage2 = new Mocha(beverage2);
		beverage2 = new Whip(beverage2);
		System.out.println(beverage2.getDescription() 
				+ " $" + beverage2.cost());
 
		Beverage beverage3 = new HouseBlend();
		beverage3 = new Soy(beverage3);
		beverage3 = new Mocha(beverage3);
		beverage3 = new Whip(beverage3);
		System.out.println(beverage3.getDescription() 
				+ " $" + beverage3.cost());
	}
}
