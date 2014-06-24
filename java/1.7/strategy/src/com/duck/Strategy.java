package com.duck;

import com.duck.duck.Duck;
import com.duck.duck.MallardDuck;
import com.duck.duck.ModelDuck;
import com.duck.flyBehavior.FlyRocketPowered;

public class Strategy {
	public static void main(String[] args) {
		Duck mallard = new MallardDuck();
		mallard.performQuack();
		mallard.performFly();

		Duck model = new ModelDuck();
		model.performFly();
		model.setFlyBehavior(new FlyRocketPowered());
		model.performFly();
	}
}
