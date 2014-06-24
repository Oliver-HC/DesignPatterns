package com.duck.duck;

import com.duck.flyBehavior.FlyNoWay;
import com.duck.quackBehavior.Quack;

public class ModelDuck extends Duck {
	public ModelDuck() {
		flyBehavior = new FlyNoWay();
		quackBehavior = new Quack();
	}

	public void display() {
		System.out.println("I'm a model duck");
	}
}
