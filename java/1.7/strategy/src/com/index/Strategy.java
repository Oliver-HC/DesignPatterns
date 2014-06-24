package com.index;

import com.duck.Duck;
import com.duck.MallardDuck;
import com.duck.ModelDuck;
import com.flyBehavior.FlyRocketPowered;

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
